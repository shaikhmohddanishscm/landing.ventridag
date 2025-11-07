import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Users, Award, GraduationCap } from 'lucide-react'
import { cn } from '../utils/cn'

const team = [
  {
    name: 'Gazanfar',
    role: 'Co-founder, Strategy & Operations',
    image: '/gazanfar.jpeg',
    education: 'SPCE Mumbai, IIT Bombay',
    experience: 'BDO India, Consultant U.S.',
    linkedin: 'https://www.linkedin.com/in/gazanfar-khan-a8b64517a/',
    gradient: 'from-blue-500 to-cyan-500',
    bio: 'Engineer and strategist with B.Tech. (SPCE Mumbai), M.Tech. (IIT Bombay), and DAAD Fellowship (TU Dresden). Leads business development, partnerships, and system design.',
  },
  {
    name: 'Ashar',
    role: 'Co-founder, Technical Lead',
    image: '/ashar.jpeg',
    education: 'IIT Delhi',
    experience: 'Software Developer, Tokyo',
    linkedin: 'https://www.linkedin.com/in/ashar-mirza/',
    gradient: 'from-purple-500 to-pink-500',
    bio: 'B.Tech. in Chemical Engineering (IIT Delhi) with development experience in Tokyo, Japan. Drives product engineering and AI integration.',
  },
  {
    name: 'Danish',
    role: 'Co-founder, Engineering & Product Ops',
    image: '/danish.jpeg',
    education: 'Mumbai University',
    experience: 'SDE II, Bangalore',
    linkedin: 'https://www.linkedin.com/in/shaikhmohddanish/',
    gradient: 'from-orange-500 to-red-500',
    bio: 'Electronics & Telecommunication engineer (Mumbai University) with backend experience as SDE II in Bangalore. Handles deployment, API integrations, and operations.',
  },
]

const TeamAceternity = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="team" ref={ref} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6"
          >
            <Users className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium">Our Team</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Meet the Visionaries
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            World-class team from top tech companies and institutions, united by a vision to transform supply chains
          </p>
        </motion.div>

        {/* Team Focus Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 ease-out backdrop-blur-xl",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
              )}
            >
              <div className="relative h-full">
                {/* Image Container with Focus Effect */}
                <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden rounded-t-3xl bg-gradient-to-b from-gray-900 to-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500"
                    style={{
                      transform: hovered === index ? 'scale(1.1)' : 'scale(1.05)',
                      objectPosition: 'center 20%',
                    }}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500",
                      hovered === index ? "opacity-100" : "opacity-60"
                    )}
                  />
                  
                  {/* LinkedIn badge */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 hover:border-primary-500 transition-colors z-10"
                  >
                    <Linkedin className="w-4 h-4 text-primary-500" />
                  </motion.a>

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <p className="text-[10px] sm:text-xs font-medium text-gray-200">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="p-4 sm:p-6">
                  <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {member.bio}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10">
                      <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300">{member.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10">
                      <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300">{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamAceternity
