import React, { useState,useEffect } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function Contact(){
    const data={name:"",email:"",Message:""}
    const [inputData, setinputData]=useState(data);
    const [flag,setflag]=useState(false)

    useEffect(()=>{
        console.log("Registered")
    },[flag])

    function handleData(e){
        setinputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email ||!inputData.Message)
        {
            alert("All Fields are mandatory")
        }
        else{
            setflag(true)
        }
    }
    return(
        <>
        <pre>{(flag)?<h2 >Hello {inputData.name}, You have registered sucessfully ! </h2>:" " }</pre>
            <form className="Contact" onSubmit={handleSubmit}>
                <div className="header">
                    <h1>Contact Us</h1>
                </div>
                <div >
                    <input className="MsgBox" type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}/>
                </div>
                <div >
                    <input className="MsgBox" type="text" placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}/>
                </div>
                <div >
                    <input className="MsgBox" type="text" placeholder="Write your message" name="Message" value={inputData.Message} onChange={handleData}/>
                </div>
                <button className="contact_btn">Submit</button>
            </form>
        </>
    )
}
export default Contact;