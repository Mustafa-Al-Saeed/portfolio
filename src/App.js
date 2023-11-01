import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className=" bg-secondary text-white border-solid border-border-all border-2 container mx-auto">
      <Header/>
      <Hero/>
      <Main/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
