import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';
import HeatMap from './HeatMap';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TotalCasesGraph from '../charts/TotalCasesGraph';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:'center'
  },
  paper: {
    // height: '400px',
    
    // width: '400px',
    flex: 1,
    margin:theme.spacing(2),
    justifyItems: 'center',
    justifyContent:'center',
    display: 'flex',
    flexDirection: "row",
    flexBasis: '35%',
    padding: 10,
    flexGrow: 0,
    height:350,
    [theme.breakpoints.down(739)]: {
      flexBasis: '100%',
      flexGrow: 0,
    }
  },
  status: {
    // height: '400px',
    
    // width: '400px',
    flex: 1,
    margin:theme.spacing(2),
    justifyItems: 'center',
    justifyContent:'center',
    display: 'flex',
    flexDirection: "row",
    flexBasis: '300px',
    padding: 10,
    flexGrow: 1,
    height:350,
    [theme.breakpoints.down(739)]: {
      flexBasis: '100%',
      flexGrow: 0,
      height:350
    }
  },

  graph: {
    // height: '400px',
    
    // width: '400px',
    flex: 1,
    margin:theme.spacing(2),
    justifyItems: 'center',
    justifyContent:'center',
    display: 'flex',
    flexDirection: "row",
    flexBasis: '35%',
    padding: 10,
    flexGrow: 0,
    height:350,
    [theme.breakpoints.down(739)]: {
      flexBasis: '100%',
      height:350
    }
  }

  // map:
  // {
  //   flex: 1,
  //   marginTop:theme.spacing(2),
  //   justifyItems: 'center',
  //   justifyContent:'center',
  //   display: 'flex',
  //   flexDirection: "row",
  //   flexBasis: '400px',
  //   padding: 10,
  //   flexGrow: 0,

  // }



}));

export default function GlobalStatus() {
  const globalStatus=useSelector(state=>state.summaryState.Global)

  const classes = useStyles();

  

  return (
    <Grid container className={classes.root} spacing={2}>
  
      <Paper className={classes.paper} >
                  <HeatMap />
                 
        </Paper>
       <Paper className={classes.status} >  
        </Paper>

        <Paper className={classes.graph} >
     
        <TotalCasesGraph/>
  
        </Paper>


  </Grid>
  );
}