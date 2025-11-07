import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass glow-border py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/ventriDAG logo.svg"
              alt="VentriDAG Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(255,0,64,0.6)]"
            />
            <span className="text-2xl sm:text-3xl font-bold text-gradient">
              VentriDAG
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium text-lg relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium text-lg py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-2.5 bg-gradient-to-r from-primary-500 to-pink-600 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              Get Started
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
