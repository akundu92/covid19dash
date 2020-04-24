import React,{useEffect,useState} from 'react'

import {Chart} from 'react-google-charts';

import {useSelector} from 'react-redux';
import {globalTimeline} from '../../utils/globalTimeline'


const TotalCasesGraph=()=>{
  const timelineState=useSelector(state=>state.timelineState);
  const [india,setIndia]=useState(null);

  

  useEffect(()=>{
    if(timelineState && timelineState.data && timelineState.data.length>0)
    {
    // setIndia(timelineState.data.filter(x => x.countrycode === 'IN'))
    setIndia(globalTimeline(timelineState.data))
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
 
    if(india){
      
      india.sort(compare).map(x=>{
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
  

  console.log(india);
  
    return india?(
        <Chart
  width={'100%'}
  height={'100%'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={renderData(india)}
  options={{
    chart: {
    
    },
    width: "100%",
    height: "100%",
    
    
  }}
  rootProps={{ 'data-testid': '4' }}
/>
    ):''
}
export default TotalCasesGraph;