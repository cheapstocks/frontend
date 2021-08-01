import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { get_info } from './utils';
import { CompanyProfile } from './models';
import Title from './template/Title';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        main: {
            height: 870,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.primary,
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        insights: {
            height: 274,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.primary,
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        container: {
            paddingBottom: theme.spacing(3),
            paddingRight: theme.spacing(3)
        },
    }),
);

export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>();

    useEffect(() => {
        get_info(params.market, params.stock).then(response => {
            let resp = response as CompanyProfile;
            if (resp !== undefined) {
                setcompanyProfile(resp)
            }
        })
    }, [params.market, params.stock])

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="row">
                <Grid item xs={8} className={classes.container}>
                    <Grid container direction="column">
                        <Grid item >
                            <Paper className={classes.main}>
                                <Title>{params.stock}</Title>
                                <Typography variant="body2" color="inherit">
                                    {companyProfile?.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction="column" className={classes.container}>
                        <Grid item >
                            <Paper className={classes.insights}>
                                <Title>Balance Sheet insights</Title>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" className={classes.container}>
                        <Grid item >
                            <Paper className={classes.insights}>
                                <Title>Income Statement insights</Title>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" className={classes.container}>
                        <Grid item>
                            <Paper className={classes.insights}>
                                <Title>Cash Flow insights</Title>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
