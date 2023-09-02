import './App.css';
import {TextField,Button} from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Fields } from './components/Fields';

function App() {
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let[data,setData]=useState([]);


  function updateName(e){
    setName(e.target.value);
  }

  function updateEmail(e){
    setEmail(e.target.value);
  }

  function addData(){
    setData([...data,{ name,email}])
    setName("");
    setEmail("");
  }

  return (
      <div className="App">
        <h1 className="header">Record Keeping App</h1>
        <div className="form">
         <Stack direction="row" spacing={1}>

            <TextField onChange={updateName} id="filled-basic" label="Name" variant="filled" />

            <TextField onChange={updateEmail} id="filled-basic" label="Email" variant="filled" />

           <Button onClick={addData} variant="contained">Add</Button>
       </Stack>  
       </div>
       <div className="userInfo">
           <div className=" userInfo_inside">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Delete</h4>
           </div>

           {
            data.map((element,index)=>{
              return(
                <Fields key={index} name={element.name}
                email={element.email}
                index={index}/>
              )
            })
           }
       </div>
     </div>
    
  );
}

export default App;
