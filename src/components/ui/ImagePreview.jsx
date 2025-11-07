import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

export const ImagePreview = ({ images, currentIndex, onClose, onNavigate }) => {
  return (
    <AnimatePresence>
      {currentIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-xl transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('prev')
                }}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-xl transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('next')
                }}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-xl transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-sm font-medium"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl w-full"
          >
            <img
              src={images[currentIndex]}
              alt={`Preview ${currentIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
