import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

import { Routes } from '../routes'
import { Header } from '../components'

const App = () => {

    const classes = useStyles()

    return (
        <SnackbarProvider maxSnack={3}>
            <div className={classes.root}>
            <CssBaseline />
                    <Header/>
                      <main className={classes.content}>
                      <div className={classes.toolbar} />
                          <Routes/>
                      </main>
            </div>
        </SnackbarProvider>
    );
}

export default App;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    background: '#F3F5F7',
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down('md')]: {
      paddingTop: "10px"
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
        marginBottom: "250px"
    },
    [theme.breakpoints.up('md')]: {
      ...theme.mixins.toolbar
    },
  },
}));
