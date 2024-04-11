"use client"
import React, { useState } from 'react'
import { SearchManufac } from '..'

const Searchbar = () => {

  const [manufacturer, setManufacturer] = useState()

  const handleSearch = () => {
    
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}> 
      <div className='searchbar__item'>
        <SearchManufac manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div> 
    </form>
  )
}

export default Searchbar
