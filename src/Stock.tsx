import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { get_info, get_key_metrics } from './utils';
import { CompanyProfile, KeyMetrics } from './models';
import Title from './template/Title';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomGrid from './template/CustomGrid';


export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>()
    const [keyMetrics, setKeyMetrics] = useState<KeyMetrics[]>()


    useEffect(() => {
        get_info(params.market, params.stock).then(response => {
            let resp = response as CompanyProfile;
            if (resp !== undefined) {
                setcompanyProfile(resp)
            }
        })
        get_key_metrics(params.market, params.stock, "quarter").then(response => {
            let resp = response as KeyMetrics[];
            if (resp !== undefined) {
                setKeyMetrics(resp)
            }
        })

    }, [params.market, params.stock])


    function showDividends() {
        return (<Grid item>
            <Typography variant="h4" color="inherit">Dividends</Typography>
            <MetricsGraph title="Dividends" dataKey="dividendYield" label="Dividend Ratio" />
        </Grid>
        )
    }

    function MetricsGraph(props: { title: string, label: string, dataKey: string }): JSX.Element {
        return (
            <React.Fragment>
                <Typography variant="h6" color="inherit">{props.title}</Typography>
                <LineChart width={300} height={100} data={keyMetrics}>
                    <XAxis dataKey="date" />
                    <YAxis hide />
                    <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" name={props.label} strokeWidth={2} />
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
                        <MetricsGraph title="Net Margin" dataKey="netProfitMarginTTM" label="Ratio" />
                        <MetricsGraph title="EPS" dataKey="earningsYield" label="Ratio" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                        <MetricsGraph title="Debt to Equity" dataKey="debtToEquity" label="Ratio" />
                        <MetricsGraph title="Current Ratio" dataKey="currentRatio" label="Ratio" />
                    </Grid>
                    {showDividends()}
                </Grid>

            </CustomGrid>
        </ResponsiveContainer>
    )
}


