"use client"
import React from 'react'
import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleScroll }) => {

  return (
  <button 
    disabled={false}
    type={'button'}
    onClick={() => {handleScroll}} 
    className={`custom-btn ${containerStyles}`}>
      <span className='flex 1'>{title}</span>   
  </button>
  )
}

export default CustomButton
