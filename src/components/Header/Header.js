import React from 'react';
import {Button,IconButton,Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from "@material-ui/icons/Menu";
import CountryComboBox from './CountryComboBox';

const useStyles=makeStyles((theme)=>({

    menuButton: {
        marginRight: theme.spacing(1),
        color:'white'
    },
    title:{
        flexGrow:1
    }
}));
   


const Header=()=>{
    const classes=useStyles()
    return(
            <>
            
            <AppBar  position="static" style={  {flexGrow: 1}}>
                <Toolbar style={  {flexGrow: 1}}>
                    {/* <Button className ={classes.buttonStyle} color='primary' variant='contained' disabled={false}>
                        Click Me
                    </Button>  */}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        CODVID-19 LIVE STATUS
                    </Typography>
                    <CountryComboBox className={classes.title}></CountryComboBox>
                </Toolbar>
            </AppBar>
            
            </>
        )
    }


    
export default Header;