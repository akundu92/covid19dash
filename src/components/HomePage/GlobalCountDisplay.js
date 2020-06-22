import React from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import {useSelector} from 'react-redux';
import TrendingUpRounded from '@material-ui/icons/TrendingUpRounded';
import GeneralCountDisplay from './GeneralCountDisplay';




// const useStyles = makeStyles((theme) => ({


// }))


const GlobalCountDisplay=(props)=>{
    const summaryState=useSelector(state=>state.summaryState.Global);
    return <GeneralCountDisplay status={summaryState} className={props.className}></GeneralCountDisplay>
}

export default GlobalCountDisplay;