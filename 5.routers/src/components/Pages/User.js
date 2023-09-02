import React from 'react'
import { useParams } from 'react-router-dom'

function User(){

  const parameter=useParams();

  return (
    <div>
        <h3>Profile of {parameter.userId} {parameter.projectId}</h3>
    </div>
  )
}

export default User