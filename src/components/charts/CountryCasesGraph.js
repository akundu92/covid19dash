import React,{useEffect,useState} from 'react'

import {Chart} from 'react-google-charts';

import {useSelector} from 'react-redux';
import {globalTimeline} from '../../utils/globalTimeline'

import CircularProgress from '@material-ui/core/CircularProgress'
import GeneralTotalCasesGraph from './GeneralTotalCasesGraph'


const CountryCasesGraph=()=>{
  const timelineState=useSelector(state=>state.timelineState);

  return <GeneralTotalCasesGraph timelineState={timelineState} countryCode="IN"/>

  
}
export default CountryCasesGraph;