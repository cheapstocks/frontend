import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { get_key_metrics } from './utils';
import { KeyMetrics } from './models';


export default function DividensChart() {
  const [keyMetrics, setKeyMetrics] = useState<KeyMetrics[]>()
  const params: { market: string, id: string } = useParams()
  const theme = useTheme()

  useEffect(() => {
    get_key_metrics(params.market, params.id, "quarter").then(response => {
      let resp = response as KeyMetrics[];
      if (resp !== undefined) {
          setKeyMetrics(resp)
      }
  } )
  }, [params.id, params.market])


  return (
      <CustomGrid>
        <Title>{params.id} dividends historical</Title>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={keyMetrics}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis dataKey="date" tickFormatter={d => `${new Date(d).getFullYear().toString()}`} stroke={theme.palette.text.secondary} />
            <YAxis dataKey="dividendYield"  stroke={theme.palette.text.secondary} />
            <Tooltip formatter={(value:number) => value.toFixed(3)}/>
            <Legend />
            <Line
              type="monotone"
              dataKey="dividendYield"
              name="Dividends"
              stroke={theme.palette.primary.main}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CustomGrid>)
}