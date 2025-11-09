import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Users, MapPin, BarChart3, Zap, Target, Award, ExternalLink } from 'lucide-react'
import { ImagePreview } from './ui/ImagePreview'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { LampContainer } from './ui/LampEffect'

const CaseStudy = () => {
  const [previewImages, setPreviewImages] = useState([])
  const [previewIndex, setPreviewIndex] = useState(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openPreview = (images, index = 0) => {
    setPreviewImages(Array.isArray(images) ? images : [images])
    setPreviewIndex(index)
  }

  const closePreview = () => {
    setPreviewIndex(null)
  }

  const navigate = (direction) => {
    if (direction === 'next') {
      setPreviewIndex((prev) => (prev + 1) % previewImages.length)
    } else {
      setPreviewIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length)
    }
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <CaseStudyHero />
      
      {/* STAR*PARADE Achievement Section */}
      <StarParadeSection openPreview={openPreview} />
      
      {/* Company Overview Image */}
      <CompanyOverviewImage openPreview={openPreview} />
      
      {/* Key Metrics Section */}
      <KeyMetrics />

      <AboutMicrobial openPreview={openPreview} />
      
      {/* Challenge Section */}
      <ChallengeSection />
      
      {/* Solution Section */}
      <SolutionSection openPreview={openPreview} />
      
      {/* Results Section */}
      <ResultsSection openPreview={openPreview} />
      
      {/* Empowering SMEs Section */}
      <EmpoweringSMEsSection />
      
      {/* CTA Section */}
      <CTASection />

      {/* Image Preview Modal */}
      <ImagePreview
        images={previewImages}
        currentIndex={previewIndex}
        onClose={closePreview}
        onNavigate={navigate}
      />
    </main>
  )
}

// About Microbial Solutions Section
const AboutMicrobial = ({ openPreview }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            About Microbial Solutions
          </h2>

          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              Microbial Solutions, a fertilizer manufacturing company based in Hingoli, Maharashtra, faced common challenges that many distribution businesses encounter - cash flow visibility, product mix optimization, and territory management.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              With 160+ dealers spread across multiple states and limited technical resources, the directors needed a solution that could provide actionable insights without requiring a dedicated analytics team or technical expertise.
            </p>

            <div className="relative pl-6 border-l-4 border-primary-500">
              <p className="text-xl text-white font-medium italic leading-relaxed text-justify">
                The directors discovered VentriDAG's self-service analytics platform and within hours of uploading their sales data, they had access to AI-powered insights that would transform their business operations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Hero Section Component
const CaseStudyHero = () => {
  return (
    <LampContainer className="min-h-screen pt-20 sm:pt-0">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl mb-4 sm:mb-6"
        >
          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
          <span className="text-xs sm:text-sm font-medium">Success Story</span>
        </motion.div>

        {/* Company Name with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="/casestudy/microbial-logo.png"
              alt="Microbial Solutions"
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-400">
            Microbial Solutions Pvt. Ltd.
          </h3>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-slate-300 to-slate-500 bg-clip-text text-transparent max-w-5xl mx-auto leading-tight"
        >
          How a Maharashtra-Based Fertilizer Company Achieved{' '}
          <span className="bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text text-transparent">
            34% Revenue Growth
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          Using Self-Service AI Analytics Without Technical Complexity
        </motion.p>

        {/* Location & Industry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-300">Hingoli, Maharashtra</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-300">Fertilizer Manufacturing</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-300">160+ Dealers Network</span>
          </div>
        </motion.div>
      </motion.div>
    </LampContainer>
  )
}

// STAR*PARADE Achievement Section
const StarParadeSection = ({ openPreview }) => {
  return (
    <section className="relative -mt-40 pt-0 pb-12 sm:pb-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,64,0.1),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 mt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl mb-4"
            >
              <Award className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium">Microbial in News</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
            >
              <span className="text-gradient">Microbial Solutions</span>{' '}
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                subsidiary shines in STAR*PARADE
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-400"
            >
              06.11.2025, Cottbus, Germany 🇩🇪
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Images - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="relative cursor-pointer group"
                onClick={() => openPreview(['/casestudy/star-parade-1.jpg', '/casestudy/star-parade-2.jpg'], 0)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src="/casestudy/star-parade-1.jpg"
                  alt="STAR*PARADE Event"
                  className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                />
              </div>
              
              <div
                className="relative cursor-pointer group"
                onClick={() => openPreview(['/casestudy/star-parade-1.jpg', '/casestudy/star-parade-2.jpg'], 1)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src="/casestudy/star-parade-2.jpg"
                  alt="STAR*PARADE Presentation"
                  className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 text-justify">
                Dr. Anupam Yadav participated in STAR*PARADE 2025 held at Cottbus Germany. He presented about how Microbial Solutions, through their innovative solutions are impacting lives in Hingoli. He won the Mixed*Pitch event where he presented how using fertilizers, crop protection & autonomous drones in precision agriculture will make Lusatia a model region for sustainable agriculture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">10,000+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Farmers</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">50,000+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Acres</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">25+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Products</div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/posts/eiz-cottbus_eiz-graesnpfeil-starparade2025-activity-7387045901439074304-nB1j/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAAaZlusBcWMNMEcxTo1gT8c2rtlab2fVL6U&utm_campaign=share_via"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>View LinkedIn Post</span>
                </a>
                <a
                  href="https://www.b-tu.de/news/artikel/30121-lausitz-feiert-ihre-gruendungstalente-die-gewinnerinnen-der-starparade-2025-stehen-fest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Read Full Article - BTU Cottbus</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Website Link at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center mt-8 sm:mt-12"
          >
            <a
              href="https://www.microbial.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-white hover:text-primary-400 transition-colors group"
            >
              <span className="font-semibold">www.microbial.in</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Company Overview Image Section
const CompanyOverviewImage = ({ openPreview }) => {
  return (
    <section className="relative pt-0 pb-12 sm:pb-16 lg:pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
          onClick={() => openPreview('/casestudy/img29.jpg')}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-primary-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/50 transition-all duration-300">
            <img 
              src="/casestudy/img29.jpg" 
              alt="Microbial Solutions Business Overview"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Click to Expand Hint */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs sm:text-sm text-white">Click to expand</span>
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Key Metrics Section
const KeyMetrics = () => {
  const [inView, setInView] = useState(false)
  
  const metrics = [
    { label: 'YoY Revenue Growth', value: 34, suffix: '%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Increase in Revenue Recovery', value: 29, suffix: '%', icon: DollarSign, color: 'from-blue-500 to-cyan-500' },
    { label: 'Increased Revenue per Unit Micro-Nutrients Product', value: 79, suffix: '%', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
    { label: 'Increased Revenue per Unit Bio-Stimulant Product', value: 51, suffix: '%', icon: Zap, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <Counter 
              key={idx} 
              metric={metric} 
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Counter Component
const Counter = ({ metric, idx }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const onViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = metric.value / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= metric.value) {
          setCount(metric.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={onViewportEnter}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="glass glow-border rounded-2xl p-6 text-center">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
          <metric.icon className="w-6 h-6 text-white" />
        </div>
        <div className={`text-4xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent mb-2`}>
          {count}{metric.suffix}
        </div>
        <p className="text-sm text-gray-400">{metric.label}</p>
      </div>
    </motion.div>
  )
}

// Challenge Section
const ChallengeSection = () => {
  const challenges = [
    {
      icon: DollarSign,
      title: 'Cash Flow & Collections',
      description: 'Tracking invoices and payments across 160+ dealers was overwhelming. The company constantly faced cash constraints, and the directors lacked real-time visibility into which customers to prioritize for collections. They needed an automated system that could instantly highlight high-priority accounts.',
      gradient: 'from-blue-500 to-cyan-500',
      canvasColors: [[59, 130, 246], [6, 182, 212]],
      animationSpeed: 5.1,
    },
    {
      icon: BarChart3,
      title: 'Product Profitability',
      description: 'The company sold multiple product categories, but major sales came from two segments - bulk Micro-Nutrients (20% margins) and their proprietary Bio-Stimulants (50% margins). While Bio-Stimulants were more profitable, pushing these products required strategic insights the team didn\'t have easy access to.',
      gradient: 'from-purple-500 to-pink-500',
      canvasColors: [[236, 72, 153], [232, 121, 249]],
      animationSpeed: 3,
    },
    {
      icon: MapPin,
      title: 'Market Expansion',
      description: 'Unless it\'s a large market place like a district city, the company maintains exclusivity of dealers within a certain range. So, the company wanted to expand into regions which were within the catchment area of the company but also do not overlap the existing dealer\'s market. So, it was important to find feasible regions where we can introduce a new dealer. So, geo-spatial analysis was must for them to understand the dealer density.',
      gradient: 'from-orange-500 to-red-500',
      canvasColors: [[251, 146, 60], [239, 68, 68]],
      animationSpeed: 3,
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            The Challenge
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Operating in a credit-heavy market with limited technical resources
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, idx) => (
            <ChallengeCard key={idx} challenge={challenge} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Challenge Card Component with Canvas Reveal Effect
const ChallengeCard = ({ challenge, idx }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-white/10 rounded-2xl p-6 sm:p-8 group overflow-hidden min-h-[400px] sm:min-h-[450px]"
    >
      {/* Corner Icons */}
      <svg className="absolute h-4 w-4 sm:h-6 sm:w-6 -top-2 -left-2 sm:-top-3 sm:-left-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
      <svg className="absolute h-4 w-4 sm:h-6 sm:w-6 -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
      <svg className="absolute h-4 w-4 sm:h-6 sm:w-6 -top-2 -right-2 sm:-top-3 sm:-right-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
      <svg className="absolute h-4 w-4 sm:h-6 sm:w-6 -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>

      {/* Canvas Reveal Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={challenge.animationSpeed}
              containerClassName={`bg-gradient-to-br ${challenge.gradient}`}
              colors={challenge.canvasColors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6 transition-all duration-200 group-hover:-translate-y-4 group-hover:opacity-0">
          <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${challenge.gradient}`}>
            <challenge.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
        
        {/* Title and Description */}
        <div className="transition-all duration-200">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center opacity-100 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-200">
            {challenge.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify opacity-100 group-hover:text-white transition-colors duration-200">
            {challenge.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Solution Section
const SolutionSection = ({ openPreview }) => {
  return (
    <section className="relative py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl mb-6">
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium">The Solution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Self-Service Analytics Without{' '}
            <span className="text-gradient">Technical Complexity</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            No consultants, no technical team, no lengthy implementation
          </p>
        </motion.div>

        {/* 1. Customer Insights in Action */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
          >
            1. Customer Insights in Action
          </motion.h3>

          {/* Desktop Layout: Content Left, Images Right */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The platform's AI-powered customer rating system analyzed multiple parameters automatically, giving each dealer a weighted importance score. The directors could instantly see which customers offered the best recovery rates, total invoiced values, and payment reliability—all updated in real-time.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The Credit Analytics page provided a clear visual hierarchy of dealer performance, with individual invoice and payment records accessible in just two clicks. This self-service visibility replaced hours of manual Excel work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/img192.jpg', alt: 'Customer Performance' },
                { src: '/casestudy/img193.jpg', alt: 'Dealer Ratings' },
                { src: '/casestudy/img202.jpg', alt: 'Credit Analytics Dashboard' },
                { src: '/casestudy/img194.jpg', alt: 'Payment Analytics' }
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview([ '/casestudy/img192.jpg', '/casestudy/img193.jpg','/casestudy/img202.jpg', '/casestudy/img194.jpg'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Layout: Content then Images */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The platform's AI-powered customer rating system analyzed multiple parameters automatically, giving each dealer a weighted importance score. The directors could instantly see which customers offered the best recovery rates, total invoiced values, and payment reliability—all updated in real-time.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The Credit Analytics page provided a clear visual hierarchy of dealer performance, with individual invoice and payment records accessible in just two clicks. This self-service visibility replaced hours of manual Excel work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/img192.jpg', alt: 'Dealer Monthly Recovery Trend' },
                { src: '/casestudy/img193.jpg', alt: 'Dealer Analysis' },
                { src: '/casestudy/img202.jpg', alt: 'Dealer Analysis Performance Matrix' },
                { src: '/casestudy/img194.jpg', alt: 'Invoices vs Payments' }
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview(['/casestudy/img192.jpg', '/casestudy/img193.jpg', '/casestudy/img202.jpg', '/casestudy/img194.jpg'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2. Sales Mapping & Product Mix Optimization */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
          >
            2. Sales Mapping & Product Mix Optimization
          </motion.h3>

          {/* Desktop Layout: Images Left, Content Right */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/bs_2024.jpg', alt: 'Bio-Stimulant Sales 2024', title: 'Bio stimulant sales in 2024' },
                { src: '/casestudy/bs_2026.jpg', alt: 'Bio-Stimulant Sales 2025', title: 'Bio stimulant sales in 2025' },
                { src: '/casestudy/2024.jpg', alt: 'Total Sales 2024', title: 'Total sales in 2024' },
                { src: '/casestudy/tot_sales2025.jpg', alt: 'Total Sales 2025', title: 'Total sales in 2025' }
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview(['/casestudy/bs_2024.jpg', '/casestudy/bs_2026.jpg', '/casestudy/2024.jpg', '/casestudy/tot_sales2025.jpg'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                    <h4 className="text-xs font-semibold text-white whitespace-nowrap">
                      {image.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Through VentriDAG's intuitive sales map interface, the directors identified regional sales trends for 2024 and 2025 themselves. The visualizations clearly showed their dependency on Micro-Nutrients and highlighted opportunities to push higher-margin Bio-Stimulants in specific territories.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The platform's automated graphs showed Bio-Stimulant sales performance across both years, making strategic insights immediately obvious.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The data revealed a crucial insight: in 2025, fewer units were ordered but revenue increased—indicating higher-margin products were gaining traction. This was made possible by VentriDAG's spatio-temporal graphs, which the directors accessed directly from their dashboard to identify which regions to target. The average revenue per unit product shift from 2024 to 2025 became instantly clear through the platform's visualization tools.
              </p>
            </motion.div>
          </div>

          {/* Mobile Layout: Content then Images */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Through VentriDAG's intuitive sales map interface, the directors identified regional sales trends for 2024 and 2025 themselves. The visualizations clearly showed their dependency on Micro-Nutrients and highlighted opportunities to push higher-margin Bio-Stimulants in specific territories.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The platform's automated graphs showed Bio-Stimulant sales performance across both years, making strategic insights immediately obvious.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The data revealed a crucial insight: in 2025, fewer units were ordered but revenue increased—indicating higher-margin products were gaining traction. This was made possible by VentriDAG's spatio-temporal graphs, which the directors accessed directly from their dashboard to identify which regions to target. The average revenue per unit product shift from 2024 to 2025 became instantly clear through the platform's visualization tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/bs_2024.jpg', alt: 'Bio-Stimulant Sales 2024', title: 'Bio stimulant sales in 2024' },
                { src: '/casestudy/bs_2026.jpg', alt: 'Bio-Stimulant Sales 2025', title: 'Bio stimulant sales in 2025' },
                { src: '/casestudy/2024.jpg', alt: 'Total Sales 2024', title: 'Total sales in 2024' },
                { src: '/casestudy/tot_sales2025.jpg', alt: 'Total Sales 2025', title: 'Total sales in 2025' }
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview(['/casestudy/bs_2024.jpg', '/casestudy/bs_2026.jpg', '/casestudy/2024.jpg', '/casestudy/tot_sales2025.jpg'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-white/10">
                    <h4 className="text-[10px] font-semibold text-white leading-tight whitespace-nowrap">
                      {image.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3. Dealer Territory Optimization */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
          >
            3. Dealer Territory Optimization
          </motion.h3>

          {/* Desktop Layout: Content Left, Images Right */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The geo-spatial analysis revealed dealer density issues affecting profitability in two ways: lack of product exclusivity and price competition between nearby dealers. Using VentriDAG's customer credibility analytics—accessible through a simple dashboard filter—the directors made data-driven decisions about dealer prioritization.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The platform's heat maps made it easy to identify over-saturated territories. Armed with these insights, they strategically reduced dealers from 135 in 2024 to 115 in 2025, focusing on higher-performing partners. Average order value jumped from ₹1.57 lakhs to ₹2.45 lakhs, and recovery ratios improved significantly through enhanced visibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/img231.jpg', alt: 'Territory Expansion Map before' },
                { src: '/casestudy/img183.jpg', alt: 'Territory Expansion Map after' },
                { src: '/casestudy/Picture13.png', alt: 'Dealer Optimization Results' },
                { src: '/casestudy/Picture11.png', alt: 'Average Revenut per unit' },
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview(['/casestudy/img231.jpg','/casestudy/img183.jpg', '/casestudy/Picture13.png', '/casestudy/Picture11.png'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Layout: Content then Images */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                The geo-spatial analysis revealed dealer density issues affecting profitability in two ways: lack of product exclusivity and price competition between nearby dealers. Using VentriDAG's customer credibility analytics—accessible through a simple dashboard filter—the directors made data-driven decisions about dealer prioritization.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                The platform's heat maps made it easy to identify over-saturated territories. Armed with these insights, they strategically reduced dealers from 135 in 2024 to 115 in 2025, focusing on higher-performing partners. Average order value jumped from ₹1.57 lakhs to ₹2.45 lakhs, and recovery ratios improved significantly through enhanced visibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: '/casestudy/img231.jpg', alt: 'Territory Expansion Map before' },
                { src: '/casestudy/img183.jpg', alt: 'Territory Expansion Map after' },
                { src: '/casestudy/Picture13.png', alt: 'Dealer Optimization Results' },
                { src: '/casestudy/Picture11.png', alt: 'Network Analysis' }
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => openPreview(['/casestudy/img231.jpg','/casestudy/img183.jpg', '/casestudy/Picture13.png', '/casestudy/Picture11.png'], idx)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="relative rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Results Section
const ResultsSection = ({ openPreview }) => {
  const results = [
    { 
      value: 34,
      suffix: '%',
      label: 'Year-over-Year Revenue Growth',
      description: 'Transformative revenue increase through data-driven strategic decisions'
    },
    { 
      value: 29,
      suffix: '%',
      label: 'Total Recovery Ratio Improvement',
      description: 'Enhanced cash flow management through AI-powered collection prioritization'
    },
    { 
      value: 79,
      suffix: '%',
      label: 'Micro-Nutrients Revenue Growth',
      description: 'Average revenue per unit growth in bulk product category'
    },
    { 
      value: 51,
      suffix: '%',
      label: 'Bio-Stimulants Revenue Growth',
      description: 'Average revenue per unit growth in high-margin proprietary products'
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,64,0.15),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl mb-6">
            <TrendingUp className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium">Results Achieved</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Transformative <span className="text-gradient">Business Impact</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Without hiring a technical team or data scientists
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {results.map((result, idx) => (
            <ResultCard key={idx} result={result} idx={idx} openPreview={openPreview} />
          ))}
        </div>

        {/* Dealer Optimization Stats */}
        <DealerOptimizationStats />
      </div>
    </section>
  )
}

// Result Card with Counter
const ResultCard = ({ result, idx, openPreview }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const onViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
      const duration = 2000
      const steps = 60
      const increment = result.value / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= result.value) {
          setCount(result.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={onViewportEnter}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="glass glow-border rounded-2xl p-8"
    >
      <div className="text-5xl font-bold text-gradient mb-3">
        {count}{result.suffix}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{result.label}</h3>
      <p className="text-gray-400 mb-4">{result.description}</p>
      
      {result.image && (
        <div 
          className="relative mt-6 cursor-pointer group"
          onClick={() => openPreview(result.image)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-primary-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={result.image} 
            alt={result.label}
            className="relative w-full h-auto rounded-xl border border-white/10 group-hover:border-primary-500/50 transition-all duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </motion.div>
  )
}

// Dealer Optimization Stats with Counter
const DealerOptimizationStats = () => {
  const [dealerFrom, setDealerFrom] = useState(0)
  const [dealerTo, setDealerTo] = useState(0)
  const [revenueFrom, setRevenueFrom] = useState(0)
  const [revenueTo, setRevenueTo] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const onViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
      
      // Dealer count animation
      animateValue(setDealerFrom, 135, 1500)
      animateValue(setDealerTo, 115, 1500)
      
      // Revenue animation (in lakhs, so 1.57 and 2.45)
      animateValue(setRevenueFrom, 157, 1500) // Will display as 1.57
      animateValue(setRevenueTo, 245, 1500) // Will display as 2.45
    }
  }

  const animateValue = (setter, target, duration) => {
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setter(target)
        clearInterval(timer)
      } else {
        setter(Math.floor(current))
      }
    }, stepDuration)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={onViewportEnter}
      viewport={{ once: true }}
      className="glass glow-border rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Dealer Network Optimization</h3>
      <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
        The geo-spatial analysis revealed dealer density issues affecting profitability. Using VentriDAG's customer credibility analytics, 
        the directors made data-driven decisions about dealer prioritization, strategically reducing the network while increasing performance.
      </p>
      
      {/* Dealer Stats */}
      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-gradient mb-2">
            {dealerFrom} → {dealerTo}
          </div>
          <p className="text-gray-400">Strategic Dealer Count Reduction</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gradient mb-2">
            ₹{(revenueFrom / 100).toFixed(2)}L → ₹{(revenueTo / 100).toFixed(2)}L
          </div>
          <p className="text-gray-400">Average Order Value Per Dealer</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-6">
        *Analysis covers January - November 2025. Report prepared November 8th, 2025.
      </p>
    </motion.div>
  )
}

// Empowering SMEs Section
const EmpoweringSMEsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Access Enterprise-Grade Analytics',
      description: 'Without hiring data scientists'
    },
    {
      icon: Zap,
      title: 'Make Data-Driven Decisions',
      description: 'Through intuitive visualizations'
    },
    {
      icon: TrendingUp,
      title: 'Implement Insights Immediately',
      description: 'Without technical dependencies'
    },
    {
      icon: BarChart3,
      title: 'Scale Operations Strategically',
      description: 'Using AI-powered intelligence'
    } 
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            How VentriDAG{' '}
            <span className="text-gradient">Empowers SMEs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed text-justify">
            Microbial Solutions' success demonstrates that advanced AI analytics and supply chain intelligence are no longer exclusive to large enterprises with dedicated technical teams. VentriDAG's self-service platform enables small and medium businesses to:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">{benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass glow-border rounded-2xl p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-pink-500 mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,64,0.2),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Ready to Transform Your{' '}
            <span className="text-gradient">Distribution Business?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            VentriDAG's platform requires no technical expertise - just your business data and a growth mindset.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-pink-600 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
            
            <Link to="/#features">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                Explore Features
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy
