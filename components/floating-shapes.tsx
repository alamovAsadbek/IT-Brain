"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  const shapes = [
    {
      type: "circle",
      size: 80,
      x: "10%",
      y: "20%",
      duration: 20,
      color: "#e6f7e9",
    },
    {
      type: "circle",
      size: 40,
      x: "70%",
      y: "10%",
      duration: 15,
      color: "#e6f7e9",
    },
    {
      type: "square",
      size: 60,
      x: "80%",
      y: "60%",
      duration: 18,
      color: "#e6f7e9",
    },
    {
      type: "triangle",
      size: 70,
      x: "30%",
      y: "70%",
      duration: 22,
      color: "#e6f7e9",
    },
    {
      type: "square",
      size: 50,
      x: "50%",
      y: "30%",
      duration: 25,
      color: "#e6f7e9",
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.type !== "triangle" ? shape.color : "transparent",
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "15%" : "0",
            clipPath: shape.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            zIndex: -1,
          }}
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
