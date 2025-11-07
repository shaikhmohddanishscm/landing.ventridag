import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export default function AnimatedGradientText({ children, className }) {
  return (
    <motion.div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ff004040] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#ff004060] dark:bg-black/40",
        className
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background:
          "linear-gradient(90deg, #ff0040, #ff0080, #ff00ff, #ff0080, #ff0040)",
        backgroundSize: "300% 100%",
      }}
    >
      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ff0040]/50 via-[#ff00ff]/50 to-[#ff0040]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" />
      {children}
    </motion.div>
  )
}
