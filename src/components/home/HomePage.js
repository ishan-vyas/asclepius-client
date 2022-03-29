import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = (props) => {

    console.log(props.patients);

    return (
        <div className='MainApp'>
            <div className='nav-bar-container'>
                <AppBar position="static">
                    <Toolbar>
                    <Typography className='app-title-nav' variant="h6" noWrap>
                        <Link to='/home' className='home-btn-nav'>
                            Asclepius
                        </Link>
                    </Typography>
                    <div className='pages-nav-navbar'>
                        <Link to='/login' className='logout-btn-nav'>
                            <Button variant="outlined" color="primary">
                                Log In
                            </Button>
                        </Link>
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
            <h1>Asclepius</h1>
        </div>
        
    )
}

export default HomePage;