require("./style/main.scss");
import React from 'react';
import {render} from 'react-dom';
import  store from "./store";
import {Provider} from 'react-redux';
import Routers from './router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



render(<Provider store={store}><MuiThemeProvider  muiTheme={getMuiTheme()}>{Routers}</MuiThemeProvider></Provider>,document.getElementById("main"))