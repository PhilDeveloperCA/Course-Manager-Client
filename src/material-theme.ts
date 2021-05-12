import {createMuiTheme} from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';
//import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';


export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: blue,
        secondary: pink,
    }
})

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: blue,
        primary:red,
        error: red,
    }
})

export default {}
