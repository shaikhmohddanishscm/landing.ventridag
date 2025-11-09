import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroAdvanced from './components/HeroAdvanced'
import DashboardShowcase from './components/DashboardShowcase'
import FeaturesAceternity from './components/FeaturesAceternity'
import CaseStudy from './components/CaseStudy'
import CaseStudyTeaser from './components/CaseStudyTeaser'
import TeamAceternity from './components/TeamAceternity'
import Contact from './components/Contact'
import FooterSimple from './components/FooterSimple'

// Home Page Component
const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroAdvanced />
      <DashboardShowcase />
      <FeaturesAceternity />
      <CaseStudyTeaser />
      <TeamAceternity />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
        <FooterSimple />
      </div>
    </Router>
  )
}

export default App
