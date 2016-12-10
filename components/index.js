import React,{Component} from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Content from './content';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class Main extends Component{

	constructor(props) {
		super(props);
	     this.state = {open: false};
	     this.handleToggle=this.handleToggle.bind(this)

	}
	
	handleToggle(){
		this.setState({open: !this.state.open})

	} 

	render() {
   		 return (
		      <div>
		        <Drawer open={this.state.open}>
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>
		      </div>
   		 );
  }
}

export const MainBody=Content;