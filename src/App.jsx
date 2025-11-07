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
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
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
