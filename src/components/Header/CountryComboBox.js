/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector} from 'react-redux';

export default function CountryComboBox() {

    const countryState=useSelector(state=>state.countryState)
  return (
    <Autocomplete
      id="combo-box-demo"
      options={countryState}
      getOptionLabel={(option) => option.Country}
      style={{ width: 300,background: 'white',margin:'10px' }}
      renderInput={(params) => <TextField {...params} label="Select Country" variant="filled" />}
      
    />
  );
}