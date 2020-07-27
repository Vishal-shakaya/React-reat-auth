import React from 'react'
import { Route } from  'react-router-dom'
import  ArticleList from './containers/ArticleList/ArticleList';
import ArticleDetail from './containers/ArticleDetail/ArticleDetail'
import  LoginForm from './components/Authentication/LoginForm'
import  SignupForm from './components/Authentication/SignupForm'
const CustomRouter = (props) => {
	return (
		 <div>
		 <Route exact path='/' component={ArticleList}/> 
		 <Route exact path='/article/:id/' component={ArticleDetail}/> 
		 <Route exact path='/login/' component={LoginForm}/> 
		 <Route exact path='/signup/' component={SignupForm}/> 
		 </div>
		)
}
export default CustomRouter 