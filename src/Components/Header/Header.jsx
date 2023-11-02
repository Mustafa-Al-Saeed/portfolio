import React, { useRef } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import Nav from './Nav';

const Header = () => {

  const burgerIcon = useRef()

  function showLinks (){
    console.log(burgerIcon.current.classList.remove("hidden"))
  }



  return (
    <header className=' flex items-center justify-between mt-[1.2rem] px-9'>
      <div onClick={() => showLinks()} className='p-2 border-[#fcca9e] shadow-icon-shadow duration-500 cursor-pointer border-[1px] md:hidden bg-[#fdfdfd] rounded-[50%] hover:border-[#ffa500]'>
        <AiOutlineMenu />
      </div>
      <div />
      <Nav flexLinks="flex" styles="rounded-[55px] hidden md:block"/>
      <div className='p-2 shadow-icon-shadow border-[#fcca9e] duration-500 cursor-pointer border-[1px] md:hidden bg-[#fdfdfd] rounded-[50%] hover:border-[#ffa500]'>
        <FiSun className=' text-[#ffa500]' />
      </div>
      <div ref={burgerIcon} className='hidden fixed inset-0 z-50 bg-[#000000de] dark:bg-[#e2e2e230] block md:hidden '>
        <Nav flexIcon="" styles="relative mt-9 rounded-[15px] mx-12" link="py-2 border-b-[1px] border-b-[var(--border-color)]" />
      </div>
    </header>
  )
}

export default Header
