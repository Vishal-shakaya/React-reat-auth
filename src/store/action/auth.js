import axios from 'axios';
import * as actionType from './actionType';


export const authStart = () => {
	return {
		type: actionType.AUTH_START
	}

}


export const authSccess = (token) => {
	return {
		type: actionType.AUTH_SUCCESS,
		token:token
	}

}

export const authfailure = (error) => {
	return {
		type: actionType.AUTH_FAILURE,
		error:error
	}

}

export const authLogout = () => {
	localStorage.removeItem('user')
	localStorage.removeItem('expirationTime')	
	return {
		type: actionType.AUTH_LOGOUT,
	}
}


export const startLogoutTimer = (expirationTime) => {
	return dispatch => {
		setTimeout(() => {
		   dispatch(authLogout())
		 }, expirationTime *1000) 
	}
}


export const authLogin = (username , password) => {
	return dispatch => {
		console.log(username , password)
		dispatch(authStart())
		axios.post('http://127.0.0.1:8000/rest-auth/login/',{
			username:username,
			password:password
		})
		.then((res)=>{
			console.log(res)
			const token  = res.data.key
			const axpirationTime = new Date( new Date().getTime() + 3600 * 1000)
			localStorage.setItem('token',token)
		    localStorage.setItem('expirationTime',axpirationTime)
		    dispatch((authSccess(token)))
		    startLogoutTimer(axpirationTime)
		})
		.catch((error) => {
			return dispatch => {
			 dispatch(authfailure(error))
	     	}
		})
		

 
	}
}


export const authSignup = (username , email , password1, password2) => {
	return dispatch => {
		dispatch(authStart())
		axios.post('http://127.0.0.1:8000/rest-auth/registration/',{
			username:username,
			email:email,
			password1:password1,
			password2:password2
		})
		.then((res)=>{
			const token  = res.data.key
			localStorage.setItem('token',token)
			dispatch((authSccess(token)))
		})
		.catch((error) => {
			return dispatch => {
			 dispatch(authfailure(error))
	     	}
		})

 
	}
}

export const checkAuthentication = () => {
	return dispatch => {
   const token = localStorage.getItem('token')
	const expirationDate = new Date (localStorage.getItem('expirationTime'))
	if (token === undefined) {
			dispatch(authLogout())

	}else {
		if(expirationDate < new Date()) {
		        dispatch(authLogout())
		}else {
			dispatch(authSccess(token))
          	dispatch(startLogoutTimer((expirationDate.getTime() - new Date().getTime()) /1000)) 
		}

	 }
	}

}