import React, { useState, useEffect, useMemo } from 'react';
import { Label, LabelList, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_metrics } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { GeneralMetrics } from './models';
import { Paper, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';


export default function MarketSectorAnalysis() {
  const [peRatio, setPeRate] = useState<GeneralMetrics[]>([]);
  const [selectedPeRatio, setSelectedPeRatio] = useState<GeneralMetrics[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const params: { market: string } = useParams()

  function redirect(event: string[]) {
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
    })

  }, [params.market])

  function redirectStock(ev: any) {
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${ev.name}`
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

  function CustomTooltip(props: any, aaa: {}) {
    let a = props as { payload: { payload: GeneralMetrics }[] }

    if ((a == null) || (a.payload == null) || (a.payload[0] == null)) {
      return null
    }
    let payload = a.payload[0].payload

    return (
      <Paper elevation={3} >
        <p className="label">Name: {`${payload.name}`}</p>
        <GetComparison title="P/E Ratio" data={payload._peNormalizedAnnual} averageData={0} />
        <GetComparison title="Gross Margin" data={payload._grossMarginTTM} averageData={0} />
        <GetComparison title="Net Margin" data={payload._netProfitMarginTTM} averageData={0} />
        <GetComparison title="ROE" data={payload._roeTTM} averageData={0} />
        <GetComparison title="Debt Ratio:" data={payload.debtNetIncomeRatio} averageData={0} />
        <p className="intro">Category: {`${payload.category}`}</p>
      </Paper>
    );
  };

  const GetComparison = (props: { title: string, data: number, averageData: number }) => {
    let data = 0.0
    if (props.data !== null) {
      data = props.data
    }
    return <p className="intro">{props.title}: {`${data.toFixed(2)}`}</p>
  }

  return (
    <CustomGrid>
      <Title>{params.market} - {industry} P/E vs Net Margin</Title>
      <Autocomplete
        multiple
        id="tags-standard"
        options={industries}
        getOptionLabel={option => `${option}`}
        onChange={(event, newValue) => {
          redirect(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Stock Industries"
            placeholder="Industries"
          />
        )}
      />
      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" dataKey="_netProfitMarginTTM" domain={[-1, 1]} allowDataOverflow={true} >
            <Label value="Net Margin" offset={0} position="bottom" />
          </XAxis>

          <YAxis type="number" dataKey="_peNormalizedAnnual" domain={[-20, 50]} allowDataOverflow={true} >
            <Label value="P/E" offset={0} position="insideLeft" />
          </YAxis>

          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={selectedPeRatio} fill="#8884d8" onClick={ev => redirectStock(ev)}>
            <LabelList dataKey="name" position="top" />
          </Scatter>

          <ReferenceLine y={0} stroke="#000000" />
          <ReferenceLine x={0} stroke="#000000" />
        </ScatterChart>
      </ResponsiveContainer>
    </CustomGrid>
  )
}