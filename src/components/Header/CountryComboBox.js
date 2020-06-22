/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

export default function CountryComboBox() {

    const countryState=useSelector(state=>state.countryState)
    const history=useHistory()

    const defaultOnSelect=(e)=>{history.push(e.target.value)}
    const onAbortHandler=()=>{history.push('./')}
  return (
    <Autocomplete
      id="combo-box-demo"
      options={countryState}
      getOptionLabel={(option) => option.Country}
      style={{ width: 300,background: 'white',margin:'10px' }}
      renderInput={(params) => <TextField {...params} label="Select Country" variant="filled"
      onSelect={defaultOnSelect} onAbort={onAbortHandler}/>}
      
    />
  );
}