import * as actionType from '../action/actionType';
import { updateObject } from '../utility';

const initialState = {
	token : null, 
	error : null ,
	loading : false  
}


const authStart = (state , action) => {
	return updateObject(state , {
		error:null , 
		loading:true 
	})

}

const authSuccess = (state , action) => {
	return updateObject(state , {
		token:action.token, 
		loading:false,
		error: null 
	})

}

const authFailure = (state , action) => {
	return updateObject(state , {
		error:action.error, 
		loading:false
	})

}

const authLogout = (state , action) => {
	return updateObject(state , {
		token:null , 
		
	})

}

const reducers = (state=initialState , action )=> {
	switch (action.type) {
		case (actionType.AUTH_START):return authStart(state, action)
		case (actionType.AUTH_SUCCESS):return authSuccess(state, action)			
		case (actionType.AUTH_FAILURE):return authFailure(state, action)
		case (actionType.AUTH_LOGOUT):return authLogout(state, action)
		default:
		  return state ;
	}

}

export default reducers