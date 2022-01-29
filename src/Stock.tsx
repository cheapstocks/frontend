import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';

import { get_dcf, get_historical_price, get_info, get_key_metrics } from './utils';
import { CompanyProfile, DCF, HistoricalPrice, KeyMetrics, Historical } from './models';
import Title from './template/Title';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomGrid from './template/CustomGrid';
import ReactECharts from 'echarts-for-react';

export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>()
    const [keyMetrics, setKeyMetrics] = useState<KeyMetrics[]>()
    const [dcf, setDCF] = useState<DCF>()
    const [price, setPrice] = useState<HistoricalPrice>()

    useEffect(() => {
        get_info(params.market, params.stock).then(response => {
            if (response !== undefined) {
                let resp = response as CompanyProfile
                setcompanyProfile(resp)
            }
        })
        get_key_metrics(params.market, params.stock, "quarter").then(response => {
            let resp = response as KeyMetrics[];
            if (resp !== undefined) {
                setKeyMetrics(resp)
            }
        })

        get_dcf(params.market, params.stock).then(response => {
            let resp = response as DCF;
            if (resp !== undefined) {
                setDCF(resp)
            }
        })

        get_historical_price(params.market, params.stock).then(response => {
            let resp = response as HistoricalPrice;
            function compare(a: Historical, b: Historical) {
                if (a.close < b.close) {
                    return -1;
                }
                return 0;
            }
            if (resp !== undefined) {
                resp.historical.sort(compare);
                setPrice(resp)

            }
        })

    }, [params.market, params.stock])


    function showDividends() {
        return (<Grid item>
            <Typography variant="h4" color="inherit">Dividends</Typography>
            <MetricsGraph title="Dividends" dataKey="dividendYield" label="Dividend Ratio" description="Dividends/Stock Price" />
        </Grid>
        )
    }

    function MetricsGraph(props: { title: string, label: string, dataKey: string, description: string }): JSX.Element {
        return (
            <React.Fragment>
                <Typography variant="h6" color="inherit">{props.title}</Typography>
                {/* {props.description} show in a popup with question mark */}
                <LineChart width={300} height={100} data={keyMetrics}>
                    <XAxis dataKey="date" />
                    <YAxis hide />
                    <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" name={props.label} strokeWidth={2} />
                    <Tooltip formatter={(value: number) => value.toFixed(3)} />
                </LineChart>
            </React.Fragment>
        )
    }

    function PriceGraph(): any {

        if (!price) {
            return {}
        }

        return {
            title: {
                left: 'center',
                text: `${params.stock} price chart`,
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    formatter: function (dateString: string) {
                        let date = new Date(dateString)
                        return `${date.toLocaleString('en-gb', {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}`
                    },
                },
                axisLine: { onZero: false },
                axisTick: { show: false },
                splitLine: { show: false },
            },
            yAxis: {
                type: 'value',
            },
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: 0,
                    minSpan: 5
                },
                {
                    type: 'slider',
                    xAxisIndex: 0,
                    minSpan: 5,
                    bottom: 50
                }
            ],
            dataset: {
                source: price?.historical,
                dimensions: [
                    { name: 'date', type: 'string' },
                    { name: 'close', type: 'number', displayName: 'Price' },
                ]
            },
            series: [
                {
                    type: 'line',
                    smooth: true
                },
            ],
            tooltip: {
                trigger: 'axis',
            }
        };
    }

    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <CustomGrid>
                    <ReactECharts
                        option={PriceGraph()}
                        style={{ height: '100%  ', width: '100%' }}
                    />
                </CustomGrid>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="100%">
                <CustomGrid>
                    <Title>{params.stock} - {companyProfile?.companyName}</Title>
                    <Typography variant="h5" color="inherit">Industry: {companyProfile?.industry}</Typography>
                    <br />
                    <br />
                    <Grid container spacing={4} >
                        <Grid item spacing={5}>
                            <Typography variant="h4" color="inherit">Income and Revenue</Typography>
                            <MetricsGraph title="ROE" dataKey="roe" label="Ratio" description="Profit/Equity" />
                            <MetricsGraph title="EPS" dataKey="earningsYield" label="Ratio" description="Earns per Share" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                            <MetricsGraph title="Debt to Equity" dataKey="debtToEquity" label="Ratio" description="Total Debt/Equity" />
                            <MetricsGraph title="Current Ratio" dataKey="currentRatio" label="Ratio" description="Assets/Liabilities" />
                        </Grid>
                        {showDividends()}
                        <Grid item>
                            <Typography variant="h4" color="inherit">Ratios</Typography>
                            <MetricsGraph title="Price to Book" dataKey="pbRatio" label="Ratio" description="Price to assets" />
                            <MetricsGraph title="P/E historical" dataKey="peRatio" label="Ratio" description="P/E historical" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" color="inherit">DCF</Typography>
                            <Typography variant="h5" color="inherit">Price: {dcf?.['Stock Price']}</Typography>
                            <Typography variant="h5" color="inherit">Target Price: {dcf?.dcf?.toFixed(.2)}</Typography>
                        </Grid>
                    </Grid>
                </CustomGrid>
            </ResponsiveContainer>
        </React.Fragment>
    )
}