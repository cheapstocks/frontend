import React, { useState, useEffect, useMemo } from 'react';
import { get_dividends_rate, get_peers } from './utils';
import { useParams } from 'react-router-dom';
import { CompanyPeers, DividendsRatio } from './models';
import CustomGrid from './template/CustomGrid';
import ReactECharts from 'echarts-for-react';

export interface DR extends DividendsRatio{
  category: string
}

export default function MarketDividends() {
  const [dividendRate, setDividendRate] = useState<DR[]>([]);
  const [peers, setPeers] = useState<CompanyPeers[]>([]);
  const params: { market: string } = useParams()


  useEffect(() => {
    get_dividends_rate(params.market).then(response => {
      let info = response as DR[]
      setDividendRate(info)
    })

    get_peers(params.market).then(response => {
      let info = response as CompanyPeers[]
      setPeers(info)
    })
  }, [params.market])

  useMemo(() => {
    // add category for companies
    for (let index = 0; index < dividendRate.length; index++){

      var peerGroup = peers.find(group => group.group.includes(dividendRate[index].name))      
      if (peerGroup === undefined ){
        continue
      }

      var companyAsPeer = peerGroup.peers.find(companyPeer => companyPeer.symbol === dividendRate[index].name)
      if (companyAsPeer === undefined ){
        continue
      }
      dividendRate[index].category = companyAsPeer?.industry
    }

  }, [dividendRate, peers]);

  function createChart(): any {

    if (dividendRate.length === 0) {
      return {}
    }

    return {
      title: {
        left: 'center',
        text: `${params.market} biggest dividends`,
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
        valueFormatter: (value: number) => `${(value * 100).toFixed()}%`
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
          startValue: 0.05,
          endValue: 0.2,
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
        source: dividendRate,
        dimensions: [
          { name: 'category', type: 'string', displayName: 'Industry' },
          { name: 'dividendsRatio', type: 'number', displayName: 'P/E' },
        ]
      },
      series: [
        {
          type: 'scatter',
          tooltip: {
            formatter: function (param: any): any {
              let payload = param?.data as DR
              return [
                'Name: ' + payload.name + '<br/>',
                'Industry: ' + payload.category + '<hr size=1 style="margin: 3px 0">',
                `Dividend Yield: ${(payload.dividendsRatio * 100).toFixed()}%`
                + '<br/>',
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

  function redirectStock(ev: any) {
    let data = ev?.data as DR
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${data.name}`
    }
  }

  return (
    <CustomGrid>
    <ReactECharts
      option={createChart()}
      style={{ height: '100%  ', width: '100%' }}
      onEvents={{
        'click': redirectStock,
      }}
    />
  </CustomGrid >
  )
}