import React,{Component} from 'react';

import $ from 'jquery';
window.jQuery=window.$=$;
require('bootstrap')
require('dataTables.net')

export default class Tables extends Component{

	constructor(props) {

		super(props);
		this.table=null;
		this.initTable=this.initTable.bind(this)
	}

	initTable(data){

		if(this.table){

			//this.table.fnDestroy()
			//this.table=null;
			$(this.root).DataTable().destroy()
		}


		this.table=$(this.root).dataTable({
			data:data,
			columns:[
				{title:"username",data:"name"},
				{title:"age",data:"age"},
				{title:"sex",data:"sex"}

			]
		})
	}
	componentDidMount() {
		this.initTable(this.props.data);
	}

	componentWillUpdate(nextProps, nextState) {
		//console.log(this.props.data)
	}
	componentWillReceiveProps(nextProps) {
		//console.log(nextProps)
		this.initTable(nextProps.data);

	}
	render(){


		return <table className='table table-bordered' ref={(r)=>{

			this.root=r
		}}>


		</table>
	}

}