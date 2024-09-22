import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactPage from './sections/ContactPage';
import HeroPage from './sections/HeroPage';
import ProjectsPage from './sections/ProjectsPage';
import ServicesPage from './sections/ServicesPage';

function App() {
  return (
    <>
     <nav> <Navbar/></nav>
     <main>
       <HeroPage/>
      <ProjectsPage/>
      <ServicesPage/>
     <ContactPage/>
     
     </main>
     <Footer/>
    </>
  );
}

export default App;
