import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;


const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();

  const saveData = async(e) =>{
    // if(!name || !email || !password){
    //   setErrorMsg(true)
    //   return false
    // }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8000/user",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/login')
  }




  

  return (
    <ContactWrapper>
      <Title>Sign-Up</Title>
      <Form>
        <label htmlFor="name">Name:</label>
        <Input type="text" required  id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <Input type="text" id="password" name="email" required onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={saveData} type="submit">Register</Button>
      </Form>
    </ContactWrapper>
  );
};
