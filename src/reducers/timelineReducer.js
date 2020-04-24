import {FETCH_TIMELINE} from '../actions/constants'

const INITIAL_STATE=[];
 const timelineState=(state=INITIAL_STATE,action)=>{
    console.log('I am being calld');
    
    switch(action.type){

        case(FETCH_TIMELINE):{
            return action.payload;
        }

        default:{
            return state;
        }
    }

}

export default timelineState;