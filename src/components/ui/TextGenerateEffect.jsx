import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"
import { cn } from "../../utils/cn"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  
  const wordsArray = words.split(" ")
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          duration: 0.5,
          delay: stagger(0.05),
        }
      )
    }
  }, [isInView, animate])

  return (
    <div ref={scope}>
      <div className={cn("font-bold", className)}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ filter: "blur(8px)" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
