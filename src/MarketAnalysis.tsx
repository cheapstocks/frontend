import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { get_peers, get_pe_rate } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { CompanyPeers } from './models';
import { createStyles, makeStyles, Slider, Theme, Typography } from '@material-ui/core';


export interface PER {
  name: string,
  priceEarningsRatio: number
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
  const [peRatio, setPeRate] = useState<PER[]>([]);
  const [peers, setPeers] = useState<CompanyPeers[]>([]);
  const params: { market: string } = useParams()
  const [limit, setLimit] = useState<number>(THRESHOLD);

  const handleChange = (event: any, value: number | number[]) => {
    if (typeof (value) === "number") {
      setLimit(value)
    }
  };

  useEffect(() => {
    get_pe_rate(params.market).then(response => {
      let info = response as PER[]
      setPeRate(info)
    })

    get_peers(params.market).then(response => {
      let info = response as CompanyPeers[]
      setPeers(info)
    })
  }, [params.market])

  useMemo(() => {
    // add category for companies
    for (let index = 0; index < peRatio.length; index++) {
      // find companies and add finnhub industry
      var peerGroup = peers.find(group => group.group.includes(peRatio[index].name))

      if (peerGroup === undefined) {
        continue
      }

      var companyAsPeer = peerGroup.peers.find(companyPeer => companyPeer.symbol === peRatio[index].name)

      if (companyAsPeer === undefined) {
        continue
      }
      peRatio[index].category = companyAsPeer?.info.finnhubIndustry
    }

  }, [peRatio, peers]);

  const classes = useStyles();

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
          <XAxis type="category" dataKey="category" />
          <YAxis type="number" dataKey="priceEarningsRatio" name="ratio" unit="%" domain={[0, limit]} allowDataOverflow={true} />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={peRatio} fill="#8884d8" />
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

function CustomTooltip(props: any, aaa: {}) {
  let a = props as { payload: { payload: { name: string, priceEarningsRatio: number, category: string } }[] }

  if ((a == null) || (a.payload == null) || (a.payload[0] == null)) {
    return null
  }
  return (
    <div className="custom-tooltip">
      <p className="label">Name: {`${a.payload[0].payload.name}`}</p>
      <p className="intro">P/E Ratio: {`${a.payload[0].payload.priceEarningsRatio}`}</p>
      <p className="intro">Category: {`${a.payload[0].payload.category}`}</p>

    </div>
  );
};

function valuetext(value: number) {
  return `${value}%`;
}