import {FETCH_COUNTRIES} from '../actions/constants'

const INITIAL_STATE=[];
 const countryState=(state=INITIAL_STATE,action)=>{

    switch(action.type){

        case(FETCH_COUNTRIES):{
            return action.payload;
        }

        default:{
            return state;
        }
    }

}

export default countryState;