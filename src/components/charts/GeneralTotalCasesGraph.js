import React,{useEffect,useState} from 'react'

import {Chart} from 'react-google-charts';

import {useSelector} from 'react-redux';
import {globalTimeline} from '../../utils/globalTimeline'

import CircularProgress from '@material-ui/core/CircularProgress'


const GeneralTotalCasesGraph=(props)=>{
  const timelineState=props.timelineState;
  const countryCode=props.countryCode;
  const [country,setCountry]=useState(null);

  

  useEffect(()=>{
    if(timelineState && timelineState.data && timelineState.data.length>0)
    {
    // setIndia(timelineState.data.filter(x => x.countrycode === 'IN'))
    if(countryCode){
        setCountry(timelineState.data.filter(x => x.countrycode === countryCode))
    }
    else{
        setCountry(globalTimeline(timelineState.data))
    }
    }
  },[timelineState])

  const renderData=()=>{
    let arr=[[
      { type: 'date', label: 'Date' },
      'Total Cases','Deaths',
    ]]

    const compare=(a,b)=>{
      let date1=new Date(a.date)
      let date2=new Date(b.date)
      if(date1>date2)
      {
        return 1;
      }
      else if(date1<date2){
        return -1;
      }
      else{
        return 0;
      }
    }
 
    if(country){
      
        country.sort(compare).map(x=>{
        let temp=[]
        temp.push(new Date(x.date));
        temp.push((parseInt(x.cases)))
        temp.push((parseInt(x.deaths)))
        arr.push(temp)
      })
    }
    console.log(arr);
    
    return arr;
  }
  

  console.log(country);
  
    return country?(
        <Chart
  width={'100%'}
  height={'100%'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={renderData(country)}
  options={{
    chart: {
    
    },
    width: "100%",
    height: "100%",
    
    
  }}
  rootProps={{ 'data-testid': '4' }}
/>
    ):( <CircularProgress />)
}
export default GeneralTotalCasesGraph;