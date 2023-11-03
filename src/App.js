import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import ContactUs from "./Components/ContactUs/ContactUs";          
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";


function App() {

  // document.documentElement.classList.add(`${dark}`)
  // document.body.classList.add(`${bodyDark}`)

  // document.documentElement.classList.remove(`${dark}`)
  // document.body.classList.remove(`${bodyDark}`)

  const [dark , setTheme] = useState("dark")
  const [bodyDark , setTh] = useState("darkBody")

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      window.localStorage.setItem("status", dark)
      window.localStorage.setItem("Body", bodyDark)
      document.documentElement.classList.add(window.localStorage.getItem("status"))
      document.body.classList.add(window.localStorage.getItem("Body"))
    }else {

    }
  })

console.log(  document.documentElement.classList)

  return (
    <div className="dark:bg-[#18181b] bg-[#f1f1f1] dark:border-[#27272c] border-solid border-[2px] container mx-auto">
      <Header/>
      <Hero/>
      <Main/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
