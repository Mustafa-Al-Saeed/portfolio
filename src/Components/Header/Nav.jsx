import React from 'react'
import links from "../../db.json"
import { IoClose } from "react-icons/io5";

const Nav = (props) => {

    

    function hideLinks() {
        
    }
    
    return (
        <nav className={`${props.flexIcon} ${props.styles} dark:bg-[#27272a] bg-[#ffffff] shadow-ul-shadow pt-[0.77rem] pb-[calc(12.32px+8px)] px-[1.6rem] `}> 
            <ul className={`${props.flexLinks} gap-4 `}>
            {
                links.links.map((link , index) => {
                return(
                    <li key={index} className={`${props.link}`} >
                        <a className={` duration-200 opacity-[0.9] font-bold text-[0.88rem] dark:text-white dark:hover:text-[var(--blue)] hover:text-[var(--blue)] dark:hover:text-[0.9rem] hover:text-[0.9rem] dark:hover:opacity-100 hover:opacity-100`} href="#">
                            {link}
                        </a>
                    </li>
                )
                })
            }
            </ul>
            <IoClose onClick={() => hideLinks()} className=' absolute top-3 right-5 block md:hidden  text-[1.5rem] cursor-pointer duration-[0.5s] dark:text-white hover:text-red-800 hover:rotate-[360deg] dark:hover:text-red-800 hover:rotate-[360deg] '/>
        </nav>
    )
}

export default Nav