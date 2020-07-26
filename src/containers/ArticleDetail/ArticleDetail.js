import React ,{useState , useEffect} from 'react';
import {Card} from 'antd'; 
import axios from 'axios'

const ArticelDetail = (props) => {
    const [state , setState] = useState({articel:{}})
    useEffect(()=> {
    	const id = props.match.params.id
	   axios.get(`http://127.0.0.1:8000/api/list/${id}`)

	   .then((response)=>{
	   	console.log(response)
	        setState({
	        	articel:response.data
	        }) 
	     })

	   .catch((err)=>{
	   	console.log(err)
	   }) 
  
    },[])

   return (
   	    <Card title={state.articel.title}>
   	    <p>{state.articel.content} </p> 
   	    </Card>
   	)
}

export default ArticelDetail; 