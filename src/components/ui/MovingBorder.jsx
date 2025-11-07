import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}) => {
  return (
    <Component
      className={cn(
        "relative bg-transparent p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: `calc(1.75rem * 0.96)`,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(1.75rem * 0.96)` }}
      >
        <motion.div
          className={cn(
            "h-[200%] w-[200%] absolute",
            borderClassName
          )}
          style={{
            background: `linear-gradient(90deg, #ff0040, #ff0080, #ff00ff, #ff0080, #ff0040)`,
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative bg-black backdrop-blur-xl z-10",
          className
        )}
        style={{
          borderRadius: `calc(1.75rem * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
