import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About />
      <Portfolio />
      <Experience />
      <Contact></Contact>
      <SocialLinks />
    </>
  );
}

export default App;
