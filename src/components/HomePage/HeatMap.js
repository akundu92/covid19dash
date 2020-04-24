import React,{useState,useEffect} from 'react';
import { Chart } from "react-google-charts";
import {useSelector} from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';


const HeatMap=(props)=>{

    const Countries=useSelector(state=>state.summaryState.Countries)
    const [key, setkey] = useState(false);
    const size = useWindowSize()
  
    useEffect(() => {
      
      setkey(prevKey => !prevKey)
    }, [size.width]);

    
    
    const getSummaryData=()=>{
        const data=[['Country', 'Confirmed Cases']]
        if(Countries && Countries.length>0){
            let tempArray=[];
    
            
            Countries.map(country=>{
              if(country.TotalConfirmed>0){
                tempArray.push(country.CountryCode);
                tempArray.push(country.TotalConfirmed);
                data.push(tempArray);
                tempArray=[];
              }
              else{
                tempArray.push(country.CountryCode);
                tempArray.push(0);
                data.push(tempArray);
                tempArray=[];
              }
            })
        }

        
        return data;
    }

    return (
        <Chart 
  width={'100%'}
  height={'100%'}

  chartType="GeoChart"
  data={getSummaryData()}
  options={{
    colorAxis: { colors: ['#FFFFFF','#F26D4B','#F59269','#E33641','#E73D3F','#CB1B4F','#981B5B','#7A1F59','#5E1F52','#5E1F52'] },
    backgroundColor: '#81d4fa',
    defaultColor: '#f5f5f5',
  }}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey=""
  rootProps={{ 'data-testid': '4' }}
/>
    )

}

 export default HeatMap;