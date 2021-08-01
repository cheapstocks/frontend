import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_dividends_rate, get_peers } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import { CompanyPeers, DividendsRatio } from './models';
import CustomGrid from './template/CustomGrid';
import { makeStyles, Slider, Typography } from '@material-ui/core';

export interface DR extends DividendsRatio{
  category: string
}

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

const INITIAL_LIMITS = [5, 25]

export default function MarketDividends() {
  const [dividendRate, setDividendRate] = useState<DR[]>([]);
  const [peers, setPeers] = useState<CompanyPeers[]>([]);
  const params: { market: string } = useParams()
  const classes = useStyles();
  const [dividendsInterval, setDividendsInterval] = React.useState<number[]>(INITIAL_LIMITS);

  const handleChange = (event: any, newValue: number | number[]) => {
    setDividendsInterval(newValue as number[]);
  };

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
      // find companies and add finnhub industry
      var peerGroup = peers.find(group => group.group.includes(dividendRate[index].name))
      
      if (peerGroup === undefined ){
        continue
      }

      var companyAsPeer = peerGroup.peers.find(companyPeer => companyPeer.symbol === dividendRate[index].name)

      if (companyAsPeer === undefined ){
        continue
      }
      dividendRate[index].category = companyAsPeer?.info.finnhubIndustry
    }

  }, [dividendRate, peers]);

  return (
    <CustomGrid>
      <Title>{params.market} biggest dividends</Title>
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
          <XAxis type="category" dataKey="category" />
          <YAxis type="number" dataKey="dividendsRatio" name="ratio" unit="%" domain={dividendsInterval} allowDataOverflow={true}  />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={dividendRate} fill="#8884d8">
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Dividends Range
      </Typography>
      <Slider
        value={dividendsInterval}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
    </CustomGrid>
  )
}

function CustomTooltip(props: any, aaa: {}) {
  let a = props as { payload: { payload: { name: string, dividendsRatio: number, category:string } }[] }

  if ((a == null) || (a.payload == null) || (a.payload[0] == null)) {
    return null
  }
  return (
    <div className="custom-tooltip">
      <p className="label">Name: {`${a.payload[0].payload.name}`}</p>
      <p className="intro">Dividend/Price ratio: {`${a.payload[0].payload.dividendsRatio.toFixed(1)}%`}</p>
      <p className="intro">Category: {`${a.payload[0].payload.category}`}</p>

    </div>
  );
};

function valuetext(value: number) {
  return `${value}%`;
}