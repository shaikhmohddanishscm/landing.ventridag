import React from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = ({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, idx) => (
          <motion.path
            key={`path-${idx}`}
            d={path}
            stroke={`url(#gradient-${idx})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <defs>
          {paths.map((_, idx) => (
            <motion.linearGradient
              key={`gradient-${idx}`}
              id={`gradient-${idx}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + idx}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <stop stopColor="#ff0040" stopOpacity="0" />
              <stop stopColor="#ff0040" />
              <stop offset="1" stopColor="#ff0080" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  )
}
