import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Blog/>
     <Work/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
