import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import ContactUs from "./Components/ContactUs/ContactUs";          
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

// &&
function App() { 

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
