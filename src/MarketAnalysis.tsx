import React, { useState, useEffect, useMemo } from 'react';
import { Label, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_metrics } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { GeneralMetrics } from './models';
import { createStyles, makeStyles, Paper, Slider, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 250,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

// change this dinamically
const THRESHOLD = 20

export default function MarketAnalysis() {
  const [peRatio, setPeRate] = useState<GeneralMetrics[]>([]);
  const [peRatioIndex, setPeRatioIndex] = useState<number>(0);
  const params: { market: string } = useParams()
  const [limit, setLimit] = useState<number>(THRESHOLD);

  const handleChange = (event: any, value: number | number[]) => {
    if (typeof (value) === "number") {
      setLimit(value)
    }
  };

  useEffect(() => {
    get_metrics(params.market).then(response => {
      let info = response as GeneralMetrics[]

      // sort list
      function compare(a: GeneralMetrics, b: GeneralMetrics) {
        if (a._peNormalizedAnnual < b._peNormalizedAnnual) {
          return -1;
        }
        return 0;
      }
      info.sort(compare);
      setPeRate(info)
    })

  }, [params.market])

  function redirectStock(ev: any) {
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${ev.name}`
    }
  }

  useMemo(() => {
    // TODO: use binary search to find peRatio to cut
    for (let i = 0; i < peRatio.length; i++) {
      if ((peRatio[i]._peNormalizedAnnual >= limit) && (peRatio[i]._peNormalizedAnnual < (limit + 0.2))) {
        setPeRatioIndex(i)
        break
      }
    }

  }, [limit, peRatio]);

  const classes = useStyles();

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

  const valuetext = (value: number) => { return `${value}%` }

  return (
    <CustomGrid>
      <Title>{params.market} smallest P/E</Title>
      <ResponsiveContainer width="100%" height="100%">
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
          <XAxis type="category" dataKey="category" allowDuplicatedCategory={false} minTickGap={1} />
          <YAxis type="number" dataKey="_peNormalizedAnnual" name="ratio" allowDataOverflow={true} >
            <Label value="P/E" offset={0} position="insideLeft" />
          </YAxis>

          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={peRatio.slice(0, peRatioIndex)} fill="#8884d8" onClick={ev => redirectStock(ev)} />
        </ScatterChart>
      </ResponsiveContainer>
      <div className={classes.root}>
        <Typography id="track-inverted-slider" gutterBottom>
          Max P/E ratio
        </Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-slider"
          getAriaValueText={valuetext}
          value={limit}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
    </CustomGrid>
  )
}