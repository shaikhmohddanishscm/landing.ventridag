import React from 'react'
import Header from './components/Header'
import HeroAdvanced from './components/HeroAdvanced'
import DashboardShowcase from './components/DashboardShowcase'
import FeaturesAceternity from './components/FeaturesAceternity'
import TeamAceternity from './components/TeamAceternity'
import Contact from './components/Contact'
import FooterSimple from './components/FooterSimple'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroAdvanced />
        <DashboardShowcase />
        <FeaturesAceternity />
        <TeamAceternity />
        <Contact />
      </main>
      <FooterSimple />
    </div>
  )
}

export default App
