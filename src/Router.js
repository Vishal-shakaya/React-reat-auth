import React from 'react'
import { Route } from  'react-router-dom'
import  ArticleList from './containers/ArticleList/ArticleList';
import ArticleDetail from './containers/ArticleDetail/ArticleDetail'
const CustomRouter = (props) => {
	return (
		 <div>
		 <Route exact path='/' component={ArticleList}/> 
		 <Route exact path='/:id' component={ArticleDetail}/> 
		 </div>
		)
}
export default CustomRouter 