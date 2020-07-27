import React , {Component} from 'react'
import axios from 'axios'

import Article from '../../components/Articles/Articles'
import CustomForm from '../../components/forms/Customform'

class ArticleList extends Component {
state = {
	Article : []
}


componentDidMount() {
   axios.get('http://127.0.0.1:8000/api/')
   .then((response)=>{
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
         <div>
           <Article data={this.state.Article}/>
           <CustomForm actionType={'post'}/> 
         </div>
		)



	}
}
export default ArticleList;