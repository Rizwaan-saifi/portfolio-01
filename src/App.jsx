import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import SkillsPage2 from './pages/SkillsPage2'
import ProjectPage from './pages/ProjectPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import AppRouters from './AppRouters'

const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage />
      <section id='about'><AboutPage/></section>
      <section id='skills'><SkillsPage/></section>
      <SkillsPage2 />
      <section id='projects'><ProjectPage /></section>
      <section id='experience'><ExperiencePage /></section>
      <section id='contact'><ContactPage /></section>
      <Footer />
      

    </div>
  )
}

export default App
