import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
       
      <Manager />
      <Features />
      <Extension />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
