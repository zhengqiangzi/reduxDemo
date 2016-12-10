import React,{Component} from 'react';

export default class Content extends Component{

	constructor(props) {
		super(props);
		
	}
	render(){


		return <div>
				<div>menu</div>
				{this.props.children}
			</div>
	}
}