import React,{useEffect} from 'react';
import covid19api from '../../apis/covid19api';
import {useDispatch,useSelector} from 'react-redux';
import {fetchCountries,fetchSummary,fetchTimeline} from '../../actions/actions';
import CountryComboBox from '../Header/CountryComboBox';
import SummaryTable from '../SummaryTable/SummaryTable';
import ComplexTable from '../Header/ComplexTable';
import SortableSummaryTable from '../SummaryTable/SortableSummaryTable';
import GlobalStatus from './GlobalStatus';
import HeatMap from './HeatMap';
import TotalCasesGraph from '../charts/TotalCasesGraph';


const HomePage=()=>{

    const dispatch=useDispatch();
    const summaryState=useSelector((state)=>{return state.summaryState});
    useEffect(() => {
        dispatch(fetchCountries());
        dispatch(fetchSummary());
        dispatch(fetchTimeline());
  },[])

    console.log(summaryState);
    
 
    return(
        // <><SummaryTable/></>
        <>
        <GlobalStatus/>
        <SortableSummaryTable />
        
        </>
        // <ComplexTable ></ComplexTable>
    )

}

export default HomePage;