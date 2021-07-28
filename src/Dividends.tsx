import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Dividend } from "./models";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { get_dividends } from './utils';
import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';

export default function DividensChart() {
  const [data, setData] = useState<Dividend[]>([]);
  const [currency, setCurrency] = useState<string>("$");
  const params: { market: string, id: string } = useParams()
  const theme = useTheme()

  useEffect(() => {
    get_dividends(params.market, params.id).then(response => {
      let dividends = response as Dividend[]
      let index = 0
      while (typeof dividends[index + 1] !== 'undefined') {
        let currentYear = new Date(dividends[index].date).getFullYear()
        let nextYear = new Date(dividends[index + 1].date).getFullYear()
        dividends[index].date = currentYear.toString()
        if (currentYear === nextYear) {
          dividends[index].adjustedAmount = dividends[index].adjustedAmount + dividends[index + 1].adjustedAmount
          dividends.splice(index + 1, 1);
        }
        index = index + 1
      }
      setData(dividends)

      if (dividends.length > 0) {
        setCurrency(dividends[0].currency)
      }

    })
  }, [params.id, params.market])


  return (
      <CustomGrid>
        <Title>{params.id} dividends historical</Title>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis dataKey="date" tickFormatter={d => `${new Date(d).getFullYear().toString()}`} stroke={theme.palette.text.secondary} />
            <YAxis dataKey="adjustedAmount" tickFormatter={d => `${currency} ${d}`} stroke={theme.palette.text.secondary} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="adjustedAmount"
              name="Dividends"
              stroke={theme.palette.primary.main}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CustomGrid>)
}