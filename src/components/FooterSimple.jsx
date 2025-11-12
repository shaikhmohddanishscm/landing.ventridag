import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

const FooterSimple = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/10 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src="/ventriDAG logo.svg" alt="VentriDAG" className="h-6 sm:h-8 w-auto" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text text-transparent">
                VentriDAG
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mb-3 sm:mb-4">
              Transform your supply chain with AI-powered analytics and geospatial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <motion.a
                href="https://app.ventridag.tech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-medium transition-colors"
              >
                Launch App
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
              <motion.a
                href="mailto:info@ventridag.tech"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm sm:text-base font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Contact Us
              </motion.a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="flex flex-col items-start md:items-end gap-1.5 sm:gap-2">
            <p className="text-xs sm:text-sm text-gray-500">
              © {currentYear} VentriDAG. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSimple
