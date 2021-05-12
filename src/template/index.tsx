import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeColorTheme, ChangeColorTheme2} from '../actions/create_theme_action';
import {Toolbar, AppBar, Menu, MenuItem, Badge, Container, IconButton, Typography, Switch, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles({
    appBar: {},
    grow: {
        flexGrow:1,
    },
    title : {
        flexGrow:1,
    },
    padding: {
        
    }
})

const LayoutComponent:React.FC = ({children}) => {

    let history = useHistory();

    const classes = useStyles();

    const darkMode = useSelector((state:any) => state.theme);
    const dispatch = useDispatch();

    console.log(darkMode);

    const handleThemeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //dispatch(ChangeColorTheme());
        const action = ChangeColorTheme2();
        dispatch(action);
    }

    return(
        <div className={classes.grow}>
            <AppBar className={classes.grow}>
                <Toolbar color="primary" className={classes.grow}>
                    <Typography variant="h6" className={classes.title}>
                        Welcome to Bookmarks Manager
                    </Typography>
                    <Typography > Dark Theme / Light Theme : </Typography>
                    <Label> Dark Theme / Light Theme :  </Label>
                    <Switch 
                        checked = {darkMode.colorMode}
                        onChange = {handleThemeChange}
                        //onChange={() => dispatch({ChangeColorTheme})}
                    />
                    <IconButton onClick ={(e) => {e.preventDefault(); history.push('/')}}>
                        <HomeIcon color="secondary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {children}
        </div> 
    );
} 

export default LayoutComponent;