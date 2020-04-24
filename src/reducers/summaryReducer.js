import {FETCH_SUMMARY} from '../actions/constants'

const INITIAL_STATE=[];
 const summaryState=(state=INITIAL_STATE,action)=>{
    console.log('I am being calld');
    
    switch(action.type){

        case(FETCH_SUMMARY):{
            return action.payload;
        }

        default:{
            return state;
        }
    }

}

export default summaryState;