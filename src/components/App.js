import React from 'react';
import Header from './Header/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../theme'
import HomePage from './HomePage/HomePage';
import CountryComboBox from './Header/CountryComboBox';


import {BrowserRouter, Switch,Route} from 'react-router-dom'
import CasesByCountry from './CountryDetails/CasesByCountry';


const App=()=>{

    return(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                
                    <Header/>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/:country" exact component={CasesByCountry}></Route>
            </ThemeProvider>
        </BrowserRouter>
    )

}

export default App;