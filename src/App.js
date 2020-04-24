import React from 'react';
import Header from './components/Header/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'
import HomePage from './components/HomePage/HomePage';
import CountryComboBox from './components/Header/CountryComboBox';

const App=()=>{

    return(
        <ThemeProvider theme={theme}>
        <Header/>
        <HomePage />
        </ThemeProvider>
    )

}

export default App;