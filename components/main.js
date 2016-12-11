import React,{Component} from 'react';
import Tables from './tables';
import moment from 'moment';
import {connect} from 'react-redux';

class Main extends  Component{

	constructor(props) {
		super(props);
	
	}

	componentWillReceiveProps(nextProps) {

		//console.log(nextProps)
	}

	componentDidMount() {

	}

	render(){

		return <div><Tables data={this.props.data}/></div>
	}
}

var mapProps=function(state,owerState){

	return {

		data:state.reduce1.userData
	}
}

var mapfuns=function(dispatch,state,owerState){


	return {

			showTime:()=>{

					//dispatch({type:"showMeEvent"})
			}

	}
}

export default connect(mapProps,mapfuns)(Main)