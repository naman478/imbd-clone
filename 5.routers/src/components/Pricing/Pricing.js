import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Pricing() {
  return (
    <div>
       <h2>Pricing</h2> 
        <Link to={'free'}>FREEEEEE</Link><br/>
        <Link to={'premium'}>PREMIUMMMm</Link>
        <Outlet/>
    </div>
  )
}

export default Pricing