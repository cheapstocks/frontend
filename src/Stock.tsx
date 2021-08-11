import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { get_info, get_stock_metrics } from './utils';
import { CompanyProfile, PeriodData, StockMetric } from './models';
import Title from './template/Title';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomGrid from './template/CustomGrid';


export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>();
    const [metrics, setMetrics] = useState<StockMetric>();

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
    }, [params.market, params.stock])

    function MetricsGraph(props: { title: string, data: PeriodData[] | undefined }): JSX.Element {
        if (props.data !== undefined) {
            props.data.sort((a: PeriodData, b: PeriodData) => new Date(a.period).getTime() - new Date(b.period).getTime())
        }

        return (
            <React.Fragment>
                <Typography variant="h6" color="inherit">{props.title}</Typography>
                <LineChart width={300} height={100} data={props.data}>
                    <XAxis dataKey="period" />
                    <YAxis hide />
                    <Line type="monotone" dataKey="v" stroke="#8884d8" name="Ratio" strokeWidth={2} />
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

                <Grid container spacing={10} >
                    <Grid item spacing={5}>
                        <Typography variant="h4" color="inherit">Income and Revenue</Typography>
                        <MetricsGraph title="Net Margin" data={metrics?.series.annual.netMargin} />
                        <MetricsGraph title="Gross Margin" data={metrics?.series.annual.grossMargin} />
                        <MetricsGraph title="EPS" data={metrics?.series.annual.eps} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                        <MetricsGraph title="Debt to Equity" data={metrics?.series.annual.totalDebtToEquity} />
                        <MetricsGraph title="Current Ratio" data={metrics?.series.annual.currentRatio} />
                    </Grid>
                </Grid>

            </CustomGrid>
        </ResponsiveContainer>
    )
}


