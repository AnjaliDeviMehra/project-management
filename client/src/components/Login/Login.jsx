import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {useGetSession}

export const Login = ({ base_url }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(user);
    try {
      const response = await axios.post(`${base_url}/login`, user);
      sessionStorage.setItem("token", response.data.token);
      console.log(response);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(()=>{
  //   if(session){
  //     navigate("/")
  //   }
  // })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="password">Password</label>
        <input type="passowrd" id="password" name="password" />
        <button>Log In</button>
      </form>
    </div>
  );
};
