import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectPage from './pages/ProjectPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import Developer from './pages/Developer'

const AppRouters = () => {
  return (
    <Routes>
      <Route path='/developer' element = {<Developer />} />
    </Routes>
  )
}

export default AppRouters
