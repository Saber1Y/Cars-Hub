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
      className={`custom-btn transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-110 hover:bg-blue-200 duration-300 ${containerStyles}`}
    >
      <span className='flex 1'>{title}</span>   
    </button>
  );
}

export default CustomButton

