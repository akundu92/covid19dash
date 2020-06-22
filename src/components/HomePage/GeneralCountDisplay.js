import React from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import {useSelector} from 'react-redux';
import TrendingUpRounded from '@material-ui/icons/TrendingUpRounded';




// const useStyles = makeStyles((theme) => ({


// }))


const GeneralCountDisplay=(props)=>{
    //Status to contain Death, recovered
    const summaryState=props.status;

    const renderTrend=(type)=>{
       if(summaryState){
        switch(type){
            case 'death': {return (<><TrendingUpRounded/>{summaryState.NewDeaths}</>)}
            case 'recovered':{return (<><TrendingUpRounded/>{summaryState.NewRecovered}</>)}
            case 'total':{return (<><TrendingUpRounded/>{summaryState.NewConfirmed}</>)}
            default: return ''
        }
    }
    else{
        return ''
    }
    }

    return (
        <Grow in={true}>
        <Paper className={props.className} >  
        
            <div className="status">
                <div className='total'>
                    <div className="label">Total Cases</div>
                    <div className="value">
                        {summaryState?summaryState.TotalConfirmed:''}
                        <br/>
                    </div>
                        <div className="trend">
                        {renderTrend('total')}
                        </div>
                    <div></div>
                </div>
                <div className="deaths">
                    <div className="label">Deaths</div>
    <div className="value">
        {summaryState?(summaryState.TotalDeaths):''}
        <br/>
        </div>

        <div className="trend">
                        {renderTrend('death')}
                        </div>
                </div>
                <div className="recovered">
                    <div className="label">Recovered</div>
                    <div className="value">{summaryState?summaryState.TotalRecovered:''}
                    <br/>
                    </div>
                    <div className="trend">
                        {renderTrend('recovered')}
                        </div>
                    
                </div>
            </div>

        </Paper>
        </Grow>
     )
}

export default GeneralCountDisplay;