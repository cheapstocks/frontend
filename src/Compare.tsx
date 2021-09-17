import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, TextField } from '@material-ui/core';
import { get_all_symbols } from './utils';
import {  Symbols } from './models';
import Title from './template/Title';
import { ResponsiveContainer } from 'recharts';
import CustomGrid from './template/CustomGrid';
import { Autocomplete } from '@material-ui/lab';


export default function Compare() {
    const params: { market: string } = useParams()
    const [symbols, setSymbols] = useState<Symbols[]>([])
    //const [stocks, setStocks] = useState<string[]>([]);

    useEffect(() => {
        let resp = [] as Symbols[]
        resp = get_all_symbols([params.market])
        setSymbols(resp)
    }, [params.market])

    return (
        <ResponsiveContainer width="100%" height="100%">
            <CustomGrid>
                <Title>Comparison</Title>
                <Typography variant="body2" color="inherit">
                    Teste
                </Typography>
                <Autocomplete
                    multiple
                    id="multiple-autocomplete"
                    options={symbols}
                    getOptionLabel={(option) => option.symbol}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Tickers"
                        label="Search for stock, market"
                        />
                    )}
                />

                <Grid container spacing={4} >
                    <Grid item spacing={5}>
                        <Typography variant="h4" color="inherit">Income and Revenue</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                    </Grid>
                </Grid>

            </CustomGrid>
        </ResponsiveContainer>
    )
}