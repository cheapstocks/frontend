import React, { useState, useEffect } from 'react';
import { get_metrics } from './utils';
import { useParams } from 'react-router-dom';
import CustomGrid from './template/CustomGrid';
import { GeneralMetrics } from './models';
import ReactECharts from 'echarts-for-react';

export default function MarketAnalysis() {
  const [peRatio, setPeRate] = useState<GeneralMetrics[]>([]);
  const params: { market: string } = useParams()

  useEffect(() => {
    get_metrics(params.market).then(response => {
      let info = response as GeneralMetrics[]
      setPeRate(info)
    })

  }, [params.market])

  function createChart(): any {

    if (peRatio.length === 0) {
      return {}
    }

    return {
      title: {
        left: 'center',
        text: `${params.market} smallest P/E`,
      },
      xAxis: {
        type: 'category',

      },
      yAxis: {
        type: 'value',
        min: -200,
        max: 2000,
      },
      toolbox: {
        feature: {
          dataZoom: {}
        }
      },
      dataZoom: [
        {
          type: 'inside'
        },
        {
          type: 'slider'
        },
        {
          type: 'inside',
          orient: 'vertical',
          filterMode: 'filter',
          startValue: 0,
          endValue: 20,
          moveHandleSize: '180%'
        },
        {
          type: 'slider',
          orient: 'vertical',
          showDataShadow: false,
          handleSize: '180%',
          moveSize: 20,
        }
      ],
      dataset: {
        source: peRatio,
        dimensions: [
          { name: 'category', type: 'string', displayName: 'Industry' },
          { name: '_peNormalizedAnnual', type: 'number' },
        ]
      },
      series: [
        {
          type: 'scatter',
          tooltip: {
            formatter: function (param: any): any {
              let payload = param?.data as GeneralMetrics
              return [
                'Name: ' + payload.name + '<br/>',
                'Industry: '+ payload.category + '<hr size=1 style="margin: 3px 0">',
                'P/E: ' + twoDecimals(payload._peNormalizedAnnual) + '<br/>',
                'Gross Margin: ' + percentageNumber(payload._grossMarginTTM) + '<br/>',
                'Net Profit: ' + percentageNumber(payload._netProfitMarginTTM) + '<br/>',
                'ROE: ' + percentageNumber(payload._netProfitMarginTTM) + '<br/>',
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
        // extraCssText: 'width: 170px'
      },
    };
  }

  function redirectStock(ev: any) {
    let data = ev?.data as GeneralMetrics
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${data.name}`
    }
  }
  const percentageNumber = (value: number) => { if (!value){return null} return `${twoDecimals(value)}%` }
  const twoDecimals = (value: number) => { return `${value.toFixed(2)}` }
  const onEvents = {
    'click': redirectStock,
  }
  return (
    <React.Fragment>
      <CustomGrid>
        <ReactECharts
          option={createChart()}
          style={{ height: '100%  ', width: '100%' }}
          onEvents={onEvents}
        />
      </CustomGrid >
    </React.Fragment>
  )
}