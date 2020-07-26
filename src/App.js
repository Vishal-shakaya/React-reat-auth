import React from 'react';
import 'antd/dist/antd.css';
import Layout from './containers/Layout/Layout'; 
// import  ArticleList from './containers/ArticleList/ArticleList';
import Router from './Router';
function App() {
  return (
    <div className="App">
      <Layout>
       <Router/>      
      </Layout>
   </div>
  );
}

export default App;

