import React ,{useState , useEffect} from 'react';
import {Card} from 'antd'; 
import axios from 'axios'
import CustomForm from '../../components/forms/Customform'

const ArticelDetail = (props) => {
    const [state , setState] = useState({articel:{}})
    const id = props.match.params.id
    useEffect(()=> {
	    axios.get(`http://127.0.0.1:8000/api/list/${id}`)
	   .then((response)=>{
	        setState({
	        	articel:response.data
	        })
	     })
	    
    },[])
const DeleteHandler = () => {
	const id = props.match.params.id
	    axios.delete(`http://127.0.0.1:8000/api/${id}/delete`)
	   .then((response)=>{
	   	console.log('delete success')
	   	props.history.replace('/') 
	     })
	   .catch((err)=>{
	   	console.log(err)
	 }) 
}
   return (
   	    <Card title={state.articel.title}>
   	    <p>{state.articel.content} </p>
   	     <CustomForm actionType={'put'} id={props.match.params.id}/>
   	     <button style={{Color:'red'}} onClick={()=>DeleteHandler()}> Delete</button>
   	    </Card>

   	)
}

export default ArticelDetail; 