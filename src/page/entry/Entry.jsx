import React, { useState } from 'react'
import './entry.style.css'
import { LoginForm } from '../../components/Login.comp'
import { ResetPassword } from '../../components/PasswordReset.comp'

export const Entry = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [frmload,setfrmload]=useState("login");
 

  const handleOnchange =e=>{
    const{name,value}=e.target;
    switch(name){
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name,value);
  }


  const handleOnsubmit = (e) => {
  e.preventDefault();
  if(!email||!password){
   return alert("fill up all the form")
  }
  // todo call api to submit the form
  console.log(email,password);
  }


  const handleOnResetsubmit = (e) => {
    e.preventDefault();
    if(!email){
     return alert("please enter email")
    }
    // todo call api to submit the form
    console.log(email);
    }



  const formSwitcher=(frmType)=>{
    setfrmload(frmType); 
  }

  
  return (
    <div className='entry-page bg-info'>
        
        {
    frmload==='login' && (
       <LoginForm 
      handleOnchange={handleOnchange} 
     handleOnsubmit={handleOnsubmit}
     formSwitcher={formSwitcher}
      email={email}
      pass={password}
  /> 
   )}
 
 {
  frmload==='rest' && (
  <ResetPassword 
  handleOnchange={handleOnchange} 
handleOnResetsubmit={handleOnResetsubmit}
formSwitcher={formSwitcher}
 email={email}

/> 
 )}
   
    </div>
  )
}
