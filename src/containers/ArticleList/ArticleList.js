import React , {Component} from 'react'
import Article from '../../components/Articles/Articles'
import axios from 'axios'

class ArticleList extends Component {
state = {
	Article : []
}


componentDidMount() {
   axios.get('http://127.0.0.1:8000/api/list/')
   .then((response)=>{
      console.log(response)
      	 	this.setState({
   		    Article:response.data 
   	      }) 
     })

   .catch((err)=>{
   	console.log(err)
   }) 	
}

render() {	
	return(
		   <Article data={this.state.Article}/>
		)



	}
}
export default ArticleList;