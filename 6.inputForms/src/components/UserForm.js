import React, { useRef } from "react";

function UserForm() {

    function handleSubmit(e){
        e.preventDefault();
        alert(nameInputRef.current.value+" "+selectInputRef.current.value);
        nameInputRef.current.value="";
    }

    const nameInputRef=useRef(null);
    const selectInputRef=useRef(null);

  return (
    <form onSubmit={handleSubmit}>
        <input ref={nameInputRef} type="text"/>

        <select ref={selectInputRef}>
            <option value="banana">banana</option>
            <option value="guava">guava</option>
            <option value="apple">apple</option>
            <option value="pineapple">pineapple</option>
        </select>

        <button >submit</button>
    </form>
  );
}

export default UserForm;
