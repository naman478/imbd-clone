import React, { useEffect,useState } from 'react'
import News from './News';
import './News.css';

function NewsApp() {

    const apiKey='39c3025e706146f99c1db7b6e2295f6e';
    const apiUrl= `https://newsapi.org/v2/everything?q=tesla&apiKey=${apiKey}`;

    const [newsList,setNewslist]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
      let response = await fetch(apiUrl);
      let data = await response.json();
     
      setNewslist(data.articles);
    }

  return (
    <div className="parent">
       {
        newsList.map(element=>{
            return <News element={element}/>
        })
       }
    </div>
  );
}

export default NewsApp; 
