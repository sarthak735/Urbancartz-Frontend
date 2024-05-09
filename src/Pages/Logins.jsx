import React, { useState } from "react";

const Logins = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=> {
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors);
    }
  }

  const signup = async ()=>{
    console.log("Sign Up Function is Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors);
    }
  }


  return (
    <div className=" w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className=" w-[580px] h-[600px] bg-white m-auto pt-[40px] pl-[60px] pr-[60px]">
        <h1 className=" mt-[20px] ml-[0px] text-3xl font-medium">{state}</h1>
        <div className=" flex flex-col gap-[29px] mt-[30px]">
          {state === "Sign Up"?<input
            name="username"
            value={formData.username}
            onChange={changeHandler}
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="text"
            placeholder="Your Name"
          />:<></>}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="email"
            placeholder="Email Address "
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="password"
            placeholder="Password"
          /> 
        </div>
        <button onClick={() =>{state === "Login" ? login():signup()}} className=" w-[461px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer">
          Continue
        </button>
        {state === "Sign Up"? <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
          Already have an account?{" "}
          <span onClick={() => {setState("Login")}} className=" text-[#ff4141] font-semibold cursor-pointer">
            Login here
          </span>
        </p>: <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
          Create an account?{" "}
          <span onClick={() => {setState("Sign Up")}} className=" text-[#ff4141] font-semibold cursor-pointer">
            Click here
          </span>
        </p>}
        
        <div className=" flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Logins;
