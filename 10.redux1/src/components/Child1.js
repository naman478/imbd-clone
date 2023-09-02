import React ,{useRef} from 'react'
import {useDispatch} from "react-redux"
import { setMessage } from '../redux/slices/MessageSlice';

function Child1() {

  const first = useRef(null);
  const dispatch=useDispatch;

  function handler(e){
    e.preventDefault();
    dispatch(setMessage(first.current.value));
  }

  return (
    <div>
        <form onSubmit={handler}>
            <input type="text" ref={first}/>
        </form>
    </div>
  )
}

export default Child1;