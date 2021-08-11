import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { get_info, get_stock_metrics, get_dividends } from './utils';
import { CompanyProfile, PeriodData, StockMetric, Dividend } from './models';
import Title from './template/Title';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomGrid from './template/CustomGrid';


export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>()
    const [metrics, setMetrics] = useState<StockMetric>()
    const [dividends, setDividends] = useState<PeriodData[]>()

    useEffect(() => {
        get_info(params.market, params.stock).then(response => {
            let resp = response as CompanyProfile;
            if (resp !== undefined) {
                setcompanyProfile(resp)
            }
        })
        get_stock_metrics(params.market, params.stock).then(response => {
            let resp = response as StockMetric;
            if (resp !== undefined) {
                setMetrics(resp)
            }
        })
        get_dividends(params.market, params.stock).then(response => {
            let resp = response as Dividend[];
            let newFormat = [] as PeriodData[]
            if (resp !== undefined) {

                resp.forEach(dividend => {
                    newFormat.push({ v: dividend.amount, period: dividend.date })
                });
                setDividends(newFormat)
            }
        }).catch()
    }, [params.market, params.stock])


    function showDividends() {
        if (dividends === undefined) {
            return ('')
        }
    
        // get price
        const marketCap = companyProfile?.marketCapitalization as number
        const shares = companyProfile?.shareOutstanding as number
        let price =  marketCap / shares

        // calculate ratio
        for (let i=0; i< dividends.length; i++ ){
            dividends[i].v =  Number((dividends[i].v / price).toFixed(2))
        }

        return (<Grid item>
            <Typography variant="h4" color="inherit">Dividends</Typography>
            <MetricsGraph title="Dividends" data={dividends} label="Dividend Ratio" />
        </Grid>
        )
    }

    function MetricsGraph(props: { title: string, data: PeriodData[] | undefined, label: string  }): JSX.Element {
        if (props.data !== undefined) {
            props.data.sort((a: PeriodData, b: PeriodData) => new Date(a.period).getTime() - new Date(b.period).getTime())
        }

        return (
            <React.Fragment>
                <Typography variant="h6" color="inherit">{props.title}</Typography>
                <LineChart width={300} height={100} data={props.data}>
                    <XAxis dataKey="period" />
                    <YAxis hide />
                    <Line type="monotone" dataKey="v" stroke="#8884d8" name={props.label} strokeWidth={2} />
                    <Tooltip />
                </LineChart>
            </React.Fragment>
        )
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <CustomGrid>
                <Title>{params.stock} details</Title>
                <Typography variant="body2" color="inherit">
                    {companyProfile?.description}
                </Typography>

                <Grid container spacing={4} >
                    <Grid item spacing={5}>
                        <Typography variant="h4" color="inherit">Income and Revenue</Typography>
                        <MetricsGraph title="Net Margin" data={metrics?.series.annual.netMargin} label="Ratio"/>
                        <MetricsGraph title="Gross Margin" data={metrics?.series.annual.grossMargin} label="Ratio"/>
                        <MetricsGraph title="EPS" data={metrics?.series.annual.eps} label="Ratio"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                        <MetricsGraph title="Debt to Equity" data={metrics?.series.annual.totalDebtToEquity} label="Ratio"/>
                        <MetricsGraph title="Current Ratio" data={metrics?.series.annual.currentRatio} label="Ratio"/>
                    </Grid>
                    {showDividends()}
                </Grid>

            </CustomGrid>
        </ResponsiveContainer>
    )
}


