import React,{Component} from 'react';

import Content from './content';
import Main from './main';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default Main;

export const MainBody=Content;