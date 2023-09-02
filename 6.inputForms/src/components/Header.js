import React from 'react'

function Header() {
  return (
    <div className="header">
        <h1 className="title">News Crunch</h1>
        <form>
            <input type="text" placeholder='search'></input>
        </form>
    </div>
  )
}

export default Header