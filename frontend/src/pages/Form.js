import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

function Form() {


  
  const navigate = useNavigate();
  const [input, setInput] = useState({})
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');

const handler = (e) => {
  const name = e.target.name
      const value = e.target.value
      setInput({...input, [name]: value})
};

const Submit = async(e)=>{
  e.preventDefault()
  const formData = new FormData()
  formData.append("title",input.title)
  formData.append("description",input.description)
  formData.append("price",input.price)
  formData.append("art_file",image) 

  const response =  await Axios.post('http://localhost:8000/product/new', formData,{
      headers : {"Content-Type" : "multipart/form-data"}
  })
  navigate('/')
}



  
  return (
    <div className="container">
      <h2 className="text-center display-3 mt-4">Add New Data</h2>

      <form onSubmit={Submit} encType="multipart/form-data" method="POST">
        <label className="mt-5">Enter Title</label>
        <input
          required
          name="title"
          type="text"
          value={input.title}
          className="form-control"
          onChange={handler}
        />

        <label>Description</label>
        <input
          required
          name="description"
          value={input.description}
          type="text"
          className="form-control"
          onChange={handler}
        />

        <label>Price</label>
        <input
          required
          name="price"
          type="number"
          value={input.price}
          className="form-control"
          onChange={handler}
          />
          <label>Item Image</label>
        <input
          required
            name="image"
            type="file"
            className="form-control"
            onChange={(e)=>setImage(e.target.files[0])} 
          />  

        <button type="submit" className="btn btn-primary mt-3">Save Item</button>
      </form>
    </div>
  );
}

export default Form;
