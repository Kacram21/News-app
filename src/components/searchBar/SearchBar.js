
import React from 'react'

function SearchBar({placeHolder, data}) {
  return (
    <div className="search">

        <div className="searchInput"></div>
        <input className="text" placeholder={placeHolder}/>
        <div className="searchIcon"></div>

      
    </div>
  )
}

export default SearchBar
