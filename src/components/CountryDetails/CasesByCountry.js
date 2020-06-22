import React from 'react';
import {useSelector} from 'react-redux';
import GeneralCountDisplay from '../HomePage/GeneralCountDisplay';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent:'center'
    },
    status: {
      flex: 1,
      margin:theme.spacing(2),
      justifyItems: 'center',
      justifyContent:'center',
      display: 'flex',
      flexDirection: "row",
      flexBasis: '100%',
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
}))

const CasesByCountry=(props)=>{
    const summaryState=useSelector(state=>state.summaryState);
    const countryState=summaryState.Countries.filter(x=>x.Country===props.match.params.country)[0]
    const classes=useStyles();

    return (
        <GeneralCountDisplay status={countryState} className={classes.status}></GeneralCountDisplay>
    )
}

export default  CasesByCountry;