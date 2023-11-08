import React, { useEffect, useRef, useState } from 'react'
import data from "../../db.json"

const Main = () => {
    const [activeLink, setActiveLink] = useState(null)
    const [currentProjects, setCurrentProjects] = useState([...data.projectDataa.htmlandcss.blogs , ...data.projectDataa.javascript.blogs , ...data.projectDataa.reactandmui.blogs , ...data.projectDataa.nodeandexpress.blogs])
    
    const current = (theIndex) => {
      if(theIndex !== null ){
        setActiveLink(theIndex)
        setCurrentProjects(Object.values(data.projectDataa)[theIndex].blogs)
      }else if (theIndex === null){
        setActiveLink(null)
        let t = []
        Object.values(data.projectDataa).map((data) => {
          data.blogs.map((data2) => {
            t.push(data2)
          })
        })
        setCurrentProjects(t)
      }
    }

  return (
    <section className='main py-12 relative after:absolute lg:after:w-[calc(100%+128px)] after:w-[calc(100%+56px)] after:h-[1px] after:bg-[var(--border-color)] after:bottom-0 lg:after:left-[-64px] after:left-[-28px]'>
      <ul >
        <li>
          <button onClick={() => current(null)} className={`w-full ${activeLink === null && "active"}`}  >all project</button>
        </li>
        {
          Object.values(data.projectDataa).map((sec, index) => {
            return(
                <li key={index}>
                  <button onClick={() => {current(index)}} className={`w-full ${index == activeLink && "active"}`}  >{sec.title}</button>
                </li>
            )
          })
        }
      </ul>
      <div className="projects">
        {
          currentProjects.map((blog, index) => {
            return(
              <div key={index}>
                <img src={blog.image} alt="" />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main