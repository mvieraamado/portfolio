import './App.css';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainSection /> 
      <ProjectsContainer />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
