import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_peers, get_metrics } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { CompanyPeers, GeneralMetrics } from './models';
import { createStyles, makeStyles, Paper, Slider, Theme, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
export interface Metrics extends GeneralMetrics {
  category: string
}

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
  const [peRatio, setPeRate] = useState<Metrics[]>([]);
  const [peers, setPeers] = useState<CompanyPeers[]>([]);
  const params: { market: string } = useParams()
  const [limit, setLimit] = useState<number>(THRESHOLD);

  const handleChange = (event: any, value: number | number[]) => {
    if (typeof (value) === "number") {
      setLimit(value)
    }
  };

  useEffect(() => {
    get_metrics(params.market).then(response => {
      let info = response as Metrics[]
      setPeRate(info)
    })

    get_peers(params.market).then(response => {
      let info = response as CompanyPeers[]
      setPeers(info)
    })
  }, [params.market])

  function redirectStock(ev: any) {
    if (ev?.name !== undefined) {
      window.location.href = `/#/market/${params.market}/${ev.name}`
    }
  }

  useMemo(() => {
    // add category for companies
    for (let index = 0; index < peRatio.length; index++) {
      // find companies and add finnhub industry
      let peerGroup = peers.find(group => group.group.includes(peRatio[index].name))
      if (peerGroup === undefined) {
        continue
      }

      let companyAsPeer = peerGroup.peers.find(companyPeer => companyPeer.symbol === peRatio[index].name)
      if (companyAsPeer === undefined) {
        continue
      }
      peRatio[index].category = companyAsPeer?.finnhubIndustry
    }

  }, [peRatio, peers]);

  const classes = useStyles();

  function CustomTooltip(props: any, aaa: {}) {
    let a = props as { payload: { payload: Metrics }[] }
  
    if ((a == null) || (a.payload == null) || (a.payload[0] == null)) {
      return null
    }
    let payload = a.payload[0].payload


    // get peers
    let companyAsPeer = peers.find(companyPeer => companyPeer.group.includes(payload.name)) as CompanyPeers
    
    return (
      <Paper elevation={3} >
        <p className="label">Name: {`${payload.name}`}</p>
        <GetComparison title="P/E Ratio" data={payload._peNormalizedAnnual} averageData={companyAsPeer.average._peNormalizedAnnual}/>
        <GetComparison title="Gross Margin" data={payload._grossMarginTTM} averageData={companyAsPeer.average._grossMarginTTM}/>
        <GetComparison title="Net Margin" data={payload._netProfitMarginTTM} averageData={companyAsPeer.average._netProfitMarginTTM}/>
        <GetComparison title="ROE" data={payload._roeTTM} averageData={companyAsPeer.average._roeTTM}/>
        <p className="intro">Debt Ratio: {`${payload.debtNetIncomeRatio.toFixed(1)}`}</p>
        <p className="intro">Category: {`${payload.category}`}</p>
      </Paper>
    );
  };
  
  const GetComparison = (props: {title: string, data: number, averageData: number}) => {
    let icon = <TrendingDownIcon/>
    if (props.data > props.averageData) {
      icon = <TrendingUpIcon/>
    } 
    return <p className="intro">{props.title}: {`${props.data.toFixed(2)}`}{icon}</p>
  }

  const valuetext = (value: number) => {return `${value}%`} 

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
          <XAxis type="category" dataKey="category" allowDuplicatedCategory={false} minTickGap={1}  />
          <YAxis type="number" dataKey="_peNormalizedAnnual" name="ratio" domain={[0, limit]} allowDataOverflow={true} />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={peRatio} fill="#8884d8" onClick={ev => redirectStock(ev)}/>
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