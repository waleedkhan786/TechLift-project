import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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

export const Login = () => {


  const navigate = useNavigate()
  const empty = {
    email: "",
    password: ""
  }
  // state for handle the login inputs

  const [handle, setHandle] = useState(empty)

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    console.log(handle)
  }



  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      alert("Please Enter the Fields First")
    } else {
      let record = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle)
      })
      record = await record.json()
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id)
        sessionStorage.setItem("userEmail", record.LoginUser.email)
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail")
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "admin@gmail.com") {

          alert("Admin Login Successfully")
          navigate("/add")
        } else {
          alert("Login Successfully")
          navigate("/")
        }


      } else {
        alert("Username and Password is invalid")
      }
    }
  }


  

  return (
    <ContactWrapper>
      <Title>Log-In</Title>
      <Form onSubmit={(e) => { e.preventDefault() }}>
        <label htmlFor="name">Email</label>
        <Input type="email" onChange={loginHandler} id="name" name='email' required />
        <label htmlFor="password">Password:</label>
        <Input type="password" onChange={loginHandler} id="password" name='password' required />
        <Button onClick={loginApi} type="submit">Login</Button>
      </Form>
    </ContactWrapper>
  );
};