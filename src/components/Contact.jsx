import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,64,0.15),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your supply chain? Let's discuss how VentriDAG can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass glow-border rounded-3xl p-8 space-y-6">
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-pink-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Email</div>
                    <a href="mailto:khangazanfarali99@gmail.com" className="text-lg text-white hover:text-primary-500 transition-colors">
                      khangazanfarali99@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-pink-600 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Phone</div>
                    <a href="tel:+917710995798" className="text-lg text-white hover:text-primary-500 transition-colors">
                      +91 7710995798
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass glow-border rounded-3xl p-8 bg-gradient-to-br from-primary-500/10 to-pink-500/10"
            >
              <h4 className="text-2xl font-bold mb-4">Why Choose VentriDAG?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>AI-powered predictive analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Real-time supply chain visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass glow-border rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-pink-600 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-50"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-400 text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
