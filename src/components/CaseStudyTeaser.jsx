import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Award, CheckCircle2 } from 'lucide-react'

const CaseStudyTeaser = () => {
  const highlights = [
    { label: 'Revenue Growth', value: '34%' },
    { label: 'Recovery Improvement', value: '29%' },
    { label: 'Micro-Nutrients Growth', value: '79%' },
    { label: 'Bio-Stimulants Growth', value: '51%' },
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,64,0.15),rgba(0,0,0,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass glow-border rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-xl mb-6">
                <Award className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium">Success Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Real Results from{' '}
                <span className="text-gradient">Real Businesses</span>
              </h2>

              <p className="text-lg text-gray-400 mb-6">
                See how Microbial Solutions Pvt. Ltd. achieved 34% revenue growth using VentriDAG's 
                self-service analytics platform - without hiring a technical team.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Optimized dealer network from 135 to 115 dealers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Increased average order value by 56%</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">No consultants, no technical team required</span>
                </div>
              </div>

              <Link to="/case-study">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-pink-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Right Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="glass glow-border rounded-2xl p-6 text-center h-full">
                    <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {highlight.value}
                    </div>
                    <p className="text-sm text-gray-400">{highlight.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Image Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 relative group cursor-pointer"
          >
            <Link to="/case-study">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src="/casestudy/img183.jpg"
                alt="Case Study Preview - Credit Analytics Dashboard"
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                  <span className="font-semibold">View Full Case Study</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyTeaser
