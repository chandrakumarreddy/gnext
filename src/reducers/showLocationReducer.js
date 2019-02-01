export default (state=false,action)=>{
	switch(action.type){
		case "SHOWLOCATION": return action.payload;
		default: return state
	}
}