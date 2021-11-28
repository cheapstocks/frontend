import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_dcf_ratio } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { DCFRatio } from './models';
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
const THRESHOLD = 1

export default function MarketDCF() {
  const [dcfRatio, setPeRate] = useState<DCFRatio[]>([]);
  const params: { market: string } = useParams()
  const [limit, setLimit] = useState<number>(THRESHOLD);

  const handleChange = (event: any, value: number | number[]) => {
    if (typeof (value) === "number") {
      setLimit(value)
    }
  };

  useEffect(() => {
    get_dcf_ratio(params.market).then(response => {
      let info = response as DCFRatio[]

      // sort list
      function compare(a: DCFRatio, b: DCFRatio) {
        if (a.ratio < b.ratio) {
          return -1;
        }
        return 0;
      }
      info.sort(compare);
      setPeRate(info)
    })

  }, [params.market])

  function redirectStock(ev: any) {
    if (ev?.symbol !== undefined) {
      window.location.href = `/#/market/${params.market}/${ev.symbol}`
    }
  }

  const classes = useStyles();

  function CustomTooltip(props: any, aaa: {}) {
    let a = props as { payload: { payload: DCFRatio }[] }

    if ((a == null) || (a.payload == null) || (a.payload[0] == null)) {
      return null
    }
    let payload = a.payload[0].payload

    return (
      <Paper elevation={3} >
        <p className="label">Symbol: {`${payload.symbol}`}</p>
        <GetComparison title="Price" data={payload.price} averageData={0} />
        <GetComparison title="Target Price" data={payload.target_price} averageData={0} />
        <p className="label">Date: {`${payload.date}`}</p>
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
      <Title>{params.market} DCF biggest delta</Title>
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
          <YAxis type="number" dataKey="ratio" name="ratio" allowDataOverflow={true} domain={[THRESHOLD, 10]}/>

          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={dcfRatio} fill="#8884d8" onClick={ev => redirectStock(ev)} />
        </ScatterChart>
      </ResponsiveContainer>
      <div className={classes.root}>
        <Typography id="track-inverted-slider" gutterBottom>
          Minimium ratio
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