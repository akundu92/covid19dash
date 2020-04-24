import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {useSelector} from 'react-redux';
import { yellow } from '@material-ui/core/colors';

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

export default function SummaryTable() {
  const summaryState=useSelector(state=>{return state.summaryState.Countries})
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  console.log(summaryState);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    
  };



  const renderBody=()=>{
    
    if(summaryState && summaryState.length>0){
      return(
       
        <TableBody>
          {summaryState.map((country) => (
            <TableRow key={country.Country} hover={true}>
              <TableCell component="th" scope="row">
                {country.Country}
              </TableCell>
              <TableCell align="center">{country.TotalConfirmed}</TableCell>
              <TableCell align="center" className={country.NewConfirmed>0?classes.newCasesRow:''}>{country.NewConfirmed}</TableCell>
              <TableCell align="center">{country.TotalDeaths}</TableCell>
              <TableCell align="center" className={country.NewDeaths>0?classes.deathRow:''}>{country.NewDeaths}</TableCell>
              <TableCell align="center">{country.TotalRecovered}</TableCell>
              <TableCell align="center" className={country.NewRecovered>0?classes.recoveredRow:''} >{country.NewRecovered}</TableCell>
            </TableRow>
          ))}
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
        <TableHead>
          <TableRow>
            <TableCell><h3>Country<TableSortLabel/></h3></TableCell>
            <TableCell align="center" ><h3>Total Confirmed<TableSortLabel/></h3><Table/></TableCell>
            <TableCell align="center"><h3>New Confirmed<TableSortLabel/></h3></TableCell>
            <TableCell align="center"><h3>Total Deaths<TableSortLabel/></h3></TableCell>
            <TableCell align="center"><h3>New Deaths<TableSortLabel/></h3></TableCell>
            <TableCell align="center"><h3>Total Recovered<TableSortLabel/></h3></TableCell>
            <TableCell align="center"><h3>New Recovered<TableSortLabel/></h3></TableCell>
            
          </TableRow>
        </TableHead>
       {renderBody()}
      </Table>
    </TableContainer>
    </Paper>
  );
}