import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
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
  const [industry, setIndustry] = useState<string>('');
  const [industries, setIndustries] = useState<string[]>([]);

  const params: { market: string } = useParams()

  function redirect(event: string[]) {
    if (event.length === 0) {
      return
    }
    setIndustry(event[0])
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
      setIndustries(lotOfIndustries)
    })

  }, [params.market])

  function redirectStock(ev: any) {
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${ev.name}`
    }
  }

  useMemo(() => {
    if (industry === '') {
      return
    }

    let select = [] as GeneralMetrics[]
    let length = peRatio.length
    for (let i = 0; i < length; i++) {
      if (peRatio[i].category === industry) {
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
          <XAxis type="number" label={{ value: "Net Margin" }} dataKey="_netProfitMarginTTM" domain={[-1, 1]} allowDataOverflow={true} />
          <YAxis type="number" label="P/E" dataKey="_peNormalizedAnnual" domain={[-50, 150]} allowDataOverflow={true} />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={selectedPeRatio} fill="#8884d8" onClick={ev => redirectStock(ev)} />
        </ScatterChart>
      </ResponsiveContainer>
    </CustomGrid>
  )
}