import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { SparklesCore } from './ui/SparklesCore'
import { MovingBorder } from './ui/MovingBorder'
import { TypewriterEffect } from './ui/TypewriterEffect'

const HeroAdvanced = () => {
  const words = [
    { text: "Transform", className: "text-white" },
    { text: "Your", className: "text-white" },
    { text: "Supply", className: "text-primary-500" },
    { text: "Chain", className: "text-primary-500" },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ff0040"
        />
      </div>

      {/* Background Beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,64,0.4),rgba(0,0,0,0))]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 z-10">
        <div className="text-center max-w-5xl mx-auto px-2">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl text-xs sm:text-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
            </motion.div>
            <span className="font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Next-Gen AI-Powered Platform
            </span>
          </motion.div>

          {/* Typewriter Heading */}
          <TypewriterEffect words={words} className="justify-center mb-4" />

          {/* Subtitle with Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            AI-powered analytics, geospatial intelligence, and real-time insights
            to optimize operations and drive growth.
          </motion.p>

          {/* Advanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-2 sm:px-4"
          >
            <MovingBorder
              duration={3000}
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg"
              containerClassName="rounded-2xl"
            >
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Started Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </MovingBorder>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 0, 64, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex items-center justify-center gap-2"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-pink-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Explore Features</span>
            </motion.a>
          </motion.div>

          {/* Dashboard Preview - Clean & Professional */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="relative max-w-6xl mx-auto px-0 sm:px-2"
          >
            {/* Animated glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-pink-500 to-purple-500 rounded-3xl opacity-15 blur-2xl"></div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-px rounded-2xl lg:rounded-3xl opacity-75 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,0,64,0.3), rgba(255,255,255,0.1))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden">
                <img
                  src="/ventridag.gif"
                  alt="VentriDAG Dashboard - Network Visualization"
                  className="w-full"
                  loading="eager"
                />
                
                {/* Floating badge top-left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4 }}
                  className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/90 backdrop-blur-xl border border-green-500/30 shadow-lg shadow-green-500/20"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0.7)",
                          "0 0 0 8px rgba(34, 197, 94, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                    />
                    <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white">Live Data</span>
                  </div>
                </motion.div>

                {/* Floating badge bottom-right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.2 }}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/90 backdrop-blur-xl border border-primary-500/30 shadow-lg shadow-primary-500/20"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-xl lg:text-2xl font-bold text-primary-500">175+</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-gray-300 whitespace-nowrap">Active Nodes</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs sm:text-sm text-white/80 font-medium tracking-wide">Scroll to explore</span>
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px 0px rgba(255, 0, 64, 0.3)",
                  "0 0 40px 10px rgba(255, 0, 64, 0.1)",
                  "0 0 20px 0px rgba(255, 0, 64, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
            <div className="relative w-7 h-11 border-2 border-white/30 rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
              <motion.div
                animate={{ 
                  y: [0, 16, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-2.5 bg-gradient-to-b from-primary-500 to-pink-500 rounded-full shadow-lg shadow-primary-500/50"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroAdvanced
