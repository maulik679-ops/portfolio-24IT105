import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <>
      <Header name="Maulik Vaghela" />
      <About />
      <Skills skillList={skills} />
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;