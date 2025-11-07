import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Map, BarChart3, Brain, Globe2, Zap, Lock, ZoomIn } from 'lucide-react'
import { CardSpotlight } from './ui/CardSpotlight'
import { FloatingCard } from './ui/FloatingCard'
import { ImagePreview } from './ui/ImagePreview'

const features = [
  {
    icon: Database,
    title: 'Seamless Data Integration',
    description: 'Connect all your data sources effortlessly. Import from Excel, CSV, ERP systems, and more with our intelligent data mapping engine.',
    image: '/A.jpeg',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Map,
    title: 'Interactive Network Maps',
    description: 'Visualize your entire supply chain network with beautiful, interactive maps. Track relationships, flows, and dependencies in real-time.',
    image: '/B.jpeg',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe2,
    title: 'Business Intelligence Maps',
    description: 'Gain geographical insights into your operations. See sales distribution, customer locations, and market opportunities on interactive maps.',
    image: '/C.jpeg',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics Dashboard',
    description: 'Deep dive into your data with advanced analytics. Track inventory flows, dealer performance, and product trends with stunning visualizations.',
    images: ['/D1.jpeg', '/D2.jpeg', '/D3.jpeg'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Supply Chain Tracking',
    description: 'Monitor your supply chain in real-time. Get instant alerts on delays, disruptions, and opportunities to optimize.',
    image: '/E.jpeg',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Brain,
    title: 'AI-Integrated Agents',
    description: 'Ask questions in natural language and get instant insights. Our AI agents understand your data and generate charts automatically.',
    images: ['/F1.jpeg', '/F2.jpeg'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Lock,
    title: 'Geospatial Intelligence',
    description: 'Optimize routes, plan logistics, and analyze geographical data. Make location-based decisions with powerful spatial analytics.',
    images: ['/G1.jpeg', '/G2.jpeg', '/G3.jpeg'],
    gradient: 'from-teal-500 to-cyan-500',
  },
]

const FeaturesAceternity = () => {
  const [previewImages, setPreviewImages] = useState([])
  const [previewIndex, setPreviewIndex] = useState(null)

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
    <section id="features" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium">Powerful Features</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools and features designed to transform your supply chain operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              onImageClick={openPreview}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImagePreview
        images={previewImages}
        currentIndex={previewIndex}
        onClose={closePreview}
        onNavigate={navigate}
      />
    </section>
  )
}

const FeatureCard = ({ feature, index, onImageClick }) => {
  const isEven = index % 2 === 0
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${!isEven ? 'lg:col-start-2' : ''}`}
      >
        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-6`}>
          <feature.icon className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          {feature.title}
        </h3>

        <p className="text-lg text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>

      {/* Images */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        {feature.images ? (
          // Multiple images grid
          <div className="grid grid-cols-2 gap-4">
            {feature.images.map((img, idx) => (
              <CardSpotlight
                key={idx}
                className={`group cursor-pointer ${idx === 2 ? 'col-span-2' : ''}`}
                onClick={() => onImageClick(feature.images, idx)}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={img}
                    alt={`${feature.title} ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-xl rounded-full p-4 border border-white/20">
                      <ZoomIn className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            ))}
          </div>
        ) : (
          // Single image
          <CardSpotlight
            className="group cursor-pointer"
            onClick={() => onImageClick(feature.image)}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-full p-4 border border-white/20">
                  <ZoomIn className="w-8 h-8" />
                </div>
              </div>
            </div>
          </CardSpotlight>
        )}
      </motion.div>
    </motion.div>
  )
}

export default FeaturesAceternity
