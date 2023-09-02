import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [name,setName]=useState('');
  const navigate=useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    if(name==="naman"){
        navigate('user/naman');
    }
    else{
        navigate('*')
    }
  }

  function updateName(e){
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input onChange={updateName} type="text"/>
     </form>
    </div>
  )
}

export default Login