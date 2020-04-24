import {combineReducers} from 'redux';
import countryState from './countryReducer';
import summaryState from './summaryReducer';
import timelineState from './timelineReducer';


export default combineReducers(
    {
        countryState,summaryState,timelineState
    }
)