"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '../type';


const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  isDisabled = false,
  btnType = 'button' || 'Submit',
  textStyles = '',
  rightIcon = '',
}) => {
  return (
    <button 
      disabled={isDisabled}
      type={btnType}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className='flex 1'>{title}</span>   
    </button>
  );
}

export default CustomButton

