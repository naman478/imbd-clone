import './App.css';
import React,{useState,useEffect} from "react";

function App() {
  const [state1,setState1]=useState(2);
  const [state2,setState2]=useState(5);
  const [info,setInfo]=useState([]);

  // useEffect(()=>{
  //   window.alert("useEffect called");
  // },[state2])

    useEffect(()=>{
    async function getData(){
      const response=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state1}&idStarts=1001`);

      const data=await response.json();
      setInfo(data);
      console.log(data);
    }
    getData();
    document.title=`(${state1}) employees`
  },[state1])

  return (
    <div>
     <h2>hii</h2>
     <button onClick={()=>setState1(state1+1)}>state1:{state1}</button>
     <button onClick={()=>setState2(state2+1)}>state2:{state2}</button>
    {
      info.map((element,index)=>{
         return(
          <div className="data"> 
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
          </div>
         )
      })
    }
    </div>
  );
}

export default App;
