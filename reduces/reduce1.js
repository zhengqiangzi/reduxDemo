let defaultState={

	flag:false,
	userData:(()=>{

			let list=[]

			for(var i=0;i<=100;i++){


					let obj={name:"johnny"+i,age:30+Math.ceil(Math.random()*30)+'岁',sex:Math.random()>0.5?'男':'女'};
					list.push(obj)
			}
			return list;

	})()

}

export default function reduce1(state=defaultState,action){

	switch(action.type){

		case "changeEvent":

				return Object.assign({},state,{flag:true})
		break;

		default:
			return Object.assign(state)

	}

	
}

/* const reduce1=(state=defaultState,action)=>{

	return Object.assign(state)

}*/