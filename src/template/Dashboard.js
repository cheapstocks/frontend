import { React, useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { mainListItems } from './listitems.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { get_all_symbols, get_markets } from '../utils.tsx';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


const URL = window.location.origin

function redirect(event) {
  if ((event?.market === undefined) || (event?.symbol === undefined)) {
    return
  }
  if (event.market === event.symbol) {
    window.location.href = `/#/market/${event.market}`
    return
  } 
  window.location.href = `/#/market/${event.market}/${event.symbol}`
}

export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [markets, setMarkets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // download markets
    get_markets().then(resp => {
      setMarkets(resp)
    })
  }, [])

  useMemo(() => {
    setItems(get_all_symbols(markets))
  }, [markets]);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar>
          <Typography component="h1" href={URL} variant="h6" color="inherit" noWrap className={classes.title}>
            Visualizing Stocks
          </Typography>
          <Autocomplete
            autoHighlight
            id="stocks_search"
            style={{ width: '30%', backgroundColor: '#FFFFFF', height: '30%' }}
            open={open}
            onOpen={() => { setOpen(true) }}
            onClose={() => { setOpen(false) }}
            getOptionSelected={(option, value) => option === value}
            getOptionLabel={option => `${option}`}
            options={items}
            onChange={(event, newValue) => {
              redirect(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Search for stock, market"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper) }}>
        <Toolbar />
        <Divider />
        <div className={classes.drawerContainer}>
          <List>{mainListItems}</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
}
