
import covid19api from '../../src/apis/covid19api';
import thevirustrackerApi from '../../src/apis/thevirustrackerApi';

import {FETCH_COUNTRIES,
        FETCH_SUMMARY,
        FETCH_TIMELINE
        } from './constants';

export const fetchCountries=()=>{
    return async function(dispatch,getState){
        const response=await covid19api.get('/countries');
        // console.log(response.data)

        function sort(a,b){
            if(a.Country>b.Country){
                return 1
            }
            else{
                return -1
            }
        }

        dispatch({
            type: FETCH_COUNTRIES,
            payload: response.data.sort(sort)
        }) 

    }
}

export const fetchSummary=()=>{
    return async function(dispatch,getState){
        const response=await covid19api.get('/summary');

        dispatch({
            type: FETCH_SUMMARY,
            payload: response.data
        }) 

    }
}

export const fetchTimeline=()=>{
    return async function(dispatch,getState){
        const response=await thevirustrackerApi.get('/timeline/map-data.json');

        dispatch({
            type: FETCH_TIMELINE,
            payload: response.data
        }) 

    }
}