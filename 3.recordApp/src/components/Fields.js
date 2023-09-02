import React from 'react'
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const Fields = ({name,email,index}) => {
  return (
    <div className=" userInfo_inside">
      <p>{name}</p>
      <p>{email}</p>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
   </div>
  )
}
