import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const FloatingCard = ({ 
  children, 
  className,
  containerClassName,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("group relative", containerClassName)}
      {...props}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-pink-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
      
      {/* Card */}
      <div className={cn(
        "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden",
        className
      )}>
        {children}
      </div>
    </motion.div>
  )
}
