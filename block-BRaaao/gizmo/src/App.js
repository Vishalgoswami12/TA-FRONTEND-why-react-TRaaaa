import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <hr />
        <Articles />
        <hr/>
        <Footer/>
      </div>
  );
}

export default App;
//// end