import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {useDispatch} from 'react-redux'

import {useSelector} from 'react-redux';
import { yellow } from '@material-ui/core/colors';
import EnhancedTableHead from './EnhancedTableHead';


const useStyles = makeStyles({
  tableContainer:{
    marginTop:'10px',
  },
  table: {
    minWidth: 834,
  },
  newCasesRow:{
    backgroundColor: '#FFEEAA'
  },
  recoveredRow:{
    backgroundColor:'#A7D983'
  },
  deathRow: {
    backgroundColor: '#FF5252',
    color:'white'
  }
});

const sortData=(data,order,orderBy)=>{
    function compare( a, b ) {
        if ( a[orderBy] < b[orderBy] ){
          if(order==='asc'){
              return -1;
          }
          else{
            return 1;
          }
        }
        if ( a[orderBy] > b[orderBy]){
            if(order==='desc'){
                return -1;
            }
            else{
              return 1;
            }
        }
        return 0;
      }
      return data.sort(compare)

}

export default function SortableTableSummary() {
    const dispatch=useDispatch();
  const summaryState=useSelector(state=>{return state.summaryState.Countries})
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('TotalConfirmed');
//   const [summaryState,setSummaryState]=useState('');
//   console.log(summaryState);

    useEffect(()=>{
        console.table(orderBy,order)
        if(summaryState&&summaryState.length>0){
        dispatch({
            type: 'FETCH_POST',
            payload: sortData(summaryState,order,orderBy)
        })}
    },[order,orderBy])

    useEffect(()=>{
        console.log("I am working");
        
        if(summaryState){
        dispatch({
            type: 'FETCH_POST',
            payload: sortData(summaryState,order,orderBy)
        })}
    },[summaryState])

  const handleRequestSort = (event, property) => {
    console.log(property);
    
    const isAsc =  order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    
    // dispatch({
    //     type: 'FETCH_POST',
    //     payload: sortData(summaryState,order,orderBy)
    // })
    // console.log(sortData(summaryState,order,orderBy))
  };



  const renderBody=()=>{
    
    if(summaryState && summaryState.length>0){
      return(
       
        <TableBody>
          {summaryState.map((country) => country.TotalConfirmed!==0?(
            <TableRow key={country.Country} hover={true}>
              <TableCell >
                {country.Country}
              </TableCell>
              <TableCell align="center">{country.TotalConfirmed}</TableCell>
              <TableCell align="center" className={country.NewConfirmed>0?classes.newCasesRow:''}>{country.NewConfirmed}</TableCell>
              <TableCell align="center">{country.TotalDeaths}</TableCell>
              <TableCell align="center" className={country.NewDeaths>0?classes.deathRow:''}>{country.NewDeaths}</TableCell>
              <TableCell align="center">{country.TotalRecovered}</TableCell>
              <TableCell align="center" className={country.NewRecovered>0?classes.recoveredRow:''} >{country.NewRecovered}</TableCell>
            </TableRow>
          ):null)}
        </TableBody>
      )
    }
    else{
      return ''
    }
  }
  

  return (
    <Paper className={classes.tableContainer}>
    <TableContainer >
      <Table className={classes.table} aria-label="simple table" size="small" >
       <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort}/>
       {renderBody()}
      </Table>
    </TableContainer>
    </Paper>
  );
}