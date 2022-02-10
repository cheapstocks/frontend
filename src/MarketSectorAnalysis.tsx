import React, { useState, useEffect, useMemo } from 'react';
import { get_metrics } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { GeneralMetrics } from './models';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ReactECharts from 'echarts-for-react';

export default function MarketSectorAnalysis() {
  const [peRatio, setPeRate] = useState<GeneralMetrics[]>([]);
  const [selectedPeRatio, setSelectedPeRatio] = useState<GeneralMetrics[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const params: { market: string, sectors: string } = useParams()
  const baseURL = `#/market/${params.market}/sector/`

  function getSectorsFromURL(): string[] {
    var listOfSectors: string[] = [];

    let postBaseURL = window.location.hash.split(baseURL)

    if (postBaseURL.length === 2) {
      postBaseURL[1].split("/").forEach(sector => {
        listOfSectors.push(decodeURI(sector.replace("_", " ")))
      })
    }

    return listOfSectors
  }

  function redirect(event: string[]) {
    var newURL = event.map(function (ind) {
      return ind.replace(" ", "_")
    }).join("/")

    window.location.hash = `${baseURL}${newURL}`
    setIndustry(event)
  }

  useEffect(() => {
    get_metrics(params.market).then(response => {
      let info = response as GeneralMetrics[]
      setPeRate(info)
      let lotOfIndustries = [] as string[]
      for (let i = 0; i < info.length; i++) {
        if (!lotOfIndustries.includes(info[i].category)) {
          lotOfIndustries.push(info[i].category)
        }
      }
      lotOfIndustries.sort()
      setIndustries(lotOfIndustries)

      setIndustry(getSectorsFromURL())
    })

  })

  function redirectStock(ev: any) {
    let data = ev?.data as GeneralMetrics
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${data.name}`
    }
  }

  useMemo(() => {
    if (industry === []) {
      return
    }

    let select = [] as GeneralMetrics[]
    let length = peRatio.length
    for (let i = 0; i < length; i++) {
      if (industry.includes(peRatio[i].category)) {
        select.push(peRatio[i])
      }
    }
    setSelectedPeRatio(select)
  }, [industry, peRatio]);

  function createChart(): any {

    if (peRatio.length === 0) {
      return {}
    }

    return {
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value: number, index: any) {
            return percentageNumber(value);
          },
        },
        name: "Net Margin",
        nameLocation: "end"
      },
      yAxis: {
        type: 'value',
        name: "P/E",
      },
      toolbox: {
        feature: {
          dataZoom: {}
        }
      },
      dataZoom: [
        {
          type: 'inside',
          orient: 'horizontal',
          filterMode: 'filter',
          startValue: -0.1,
          endValue: 1,
          moveHandleSize: '180%'
        },
        {
          type: 'slider',
          orient: 'horizontal',
          showDataShadow: true,
          handleSize: '180%',
        },
        {
          type: 'inside',
          orient: 'vertical',
          filterMode: 'filter',
          startValue: -10,
          endValue: 20,
          moveHandleSize: '180%'
        },
        {
          type: 'slider',
          orient: 'vertical',
          showDataShadow: true,
          handleSize: '180%',
          moveSize: 20,
        }
      ],
      dataset: {
        source: selectedPeRatio,
        dimensions: [
          { name: '_netProfitMarginTTM', type: 'number', displayName: 'Net Profit Margin' },
          { name: '_peNormalizedAnnual', type: 'number', displayName: 'P/E' },
        ]
      },
      series: [
        {
          type: 'scatter',
          label: {
            show: true,
            formatter: function (event: any) {
              let payload = event?.data as GeneralMetrics
              return payload.name
            },
            position: 'top',
            distance: 0,
            color: '#000'
          },
          tooltip: {
            formatter: function (param: any): any {
              let payload = param?.data as GeneralMetrics
              return [
                'Name: ' + payload.name + '<br/>',
                'Industry: ' + payload.category + '<hr size=1 style="margin: 3px 0">',
                'P/E: ' + twoDecimals(payload._peNormalizedAnnual) + '<br/>',
                'Gross Margin: ' + percentageNumber(payload._grossMarginTTM) + '<br/>',
                'Net Profit: ' + percentageNumber(payload._netProfitMarginTTM) + '<br/>',
                'ROE: ' + percentageNumber(payload._roeTTM) + '<br/>',
                'Capex/Net Income: ' + percentageNumber(payload.capexNetIncomeRatio) + '<br/>',
                'Debt/Net Income: ' + percentageNumber(payload.debtNetIncomeRatio) + '<br/>',
                'Enterprise Value: ' + twoDecimals(payload.enterpriseValueMultipleTTM) + '<br/>',
              ].join('');
            }
          }
        },
      ],
      tooltip: {
        trigger: 'item',
        borderWidth: 1,
        borderColor: '#ccc',
        textStyle: {
          color: '#000'
        },
      },
    };
  }

  const percentageNumber = (value: number) => { if (!value) { return null } return `${(value * 100).toFixed(0)}%` }
  const twoDecimals = (value: number) => { return `${value.toFixed(2)}` }

  return (
    <CustomGrid>
      <Title>Industries on {params.market} - {industry}</Title>
      <Autocomplete
        multiple
        id="tags-standard"
        options={industries}
        getOptionLabel={option => `${option}`}
        onChange={(event, newValue) => {
          redirect(newValue);
        }}
        value={industry}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Stock Industries"
            placeholder="Industries"
          />
        )}
      />
      <ReactECharts
        option={createChart()}
        style={{ height: '100%  ', width: '100%' }}
        onEvents={{
          'click': redirectStock,
        }}
      />
    </CustomGrid>
  )
}
