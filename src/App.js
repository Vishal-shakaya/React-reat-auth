import React , {useEffect} from 'react';
import 'antd/dist/antd.css';
import Layout from './containers/Layout/Layout'; 
// import  ArticleList from './containers/ArticleList/ArticleList';
import Router from './Router';
import * as action from './store/action/auth'
import { connect } from 'react-redux'

function App(props) {
  
  useEffect(()=>{
   props.checkAuthentication()
  },[])

  return (
    <div className="App">
      <Layout {...props}>
       <Router/>      
      </Layout>
   </div>
  );
}

const mapStateToProps = state => {
	return {

		 isAuthenticated: state.auth.token !==null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		checkAuthentication : () => dispatch(action.checkAuthentication())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

