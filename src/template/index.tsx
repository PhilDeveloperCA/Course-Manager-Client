import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeColorTheme, ChangeColorTheme2} from '../actions/action_creators/create_theme_action';
import {Toolbar, AppBar, Menu, MenuItem, Badge, Container, IconButton, Typography, Switch, makeStyles, Button} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom';
import { Label } from '@material-ui/icons';
import {StoreState} from '../store';
import Auth from './auth_form';
import {Logout} from '../actions/action_creators/create_auth_actions';

const useStyles = makeStyles(theme => ({
    appBar: {},
    grow: {
        flexGrow:1,
    },
    toolbar : theme.mixins.toolbar,
    title : {
        flexGrow:1,
    }
}))

const LayoutComponent:React.FC = ({children}) => {

    let history = useHistory();
    const authState = useSelector((store:StoreState) => store.authState);
    const dispatch = useDispatch();
    const classes = useStyles();

    const darkMode = useSelector((state:any) => state.theme);

    console.log(authState);


    const handleThemeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //dispatch(ChangeColorTheme());
        const action = ChangeColorTheme2();
        dispatch(action);
    }

    /*if(!authState.authorized){
        return (
            <React.Fragment>
                <Auth />
            </React.Fragment>
        );
    }
    else{*/
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
                    <Button onClick={(e) => dispatch(Logout())}> LogOut </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}> </div>
            {authState.authorized?children:<Auth />}
        </div> 
    );
} 

export default LayoutComponent;