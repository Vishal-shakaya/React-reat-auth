import React , {useState} from 'react';
import axios from 'axios'; 


const IngredientForm = React.memo(props => {
  const submitHandler = (event,actionType=null , id=null) => {
     const title = event.target.elements.title.value;
     const content = event.target.elements.content.value

        switch (actionType) {
          case 'post':
            return axios.post('http://127.0.0.1:8000/api/create/',{
              title: title,
              content :content
            })
            .then((response) =>{
              console.log(response)
            }) 
            .catch((err) =>{
              console.log(err)
            })

          case 'put':
             return axios.put(`http://127.0.0.1:8000/api/${id}/update`,{
              title: title,
              content :content
            })
            .then((response) =>{
              console.log(response)
            }) 
            .catch((err) =>{
              console.log(err)
            })

          default:
            return ;      
        }
  };
  
  return (
    <section >
        <form onSubmit={(event)=>submitHandler(event , props.actionType , props.id)}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name='title' />

          </div>
          <div className="form-control">
            <label htmlFor="amount">Content</label>
            <textarea rows="5" cols="100" id="amount" name='content'/>
          </div>

           <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
    </section>
  );
});

export default IngredientForm;
