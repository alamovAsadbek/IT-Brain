"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Users, BookOpen, Award, Building } from "lucide-react"
import { motion } from "framer-motion"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  duration?: number
  delay?: number
}

function StatItem({ icon, value, label, suffix = "", duration = 2000, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), end))
      if (start >= end) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration, isVisible])

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a] transition-all hover:scale-110 duration-300">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-[#0e5c2a]" ref={countRef}>
        {count}
        {suffix}
      </h3>
      <p className="mt-1 text-gray-600">{label}</p>
    </motion.div>
  )
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      <StatItem
        icon={<Users className="h-8 w-8" />}
        value={400}
        label="Muvaffaqiyatli talabalar"
        suffix="+"
        delay={0.1}
      />
      <StatItem
        icon={<BookOpen className="h-8 w-8" />}
        value={5}
        label="Professional kurslar"
        suffix="+"
        delay={0.2}
      />
      <StatItem icon={<Award className="h-8 w-8" />} value={3} label="Yillik tajriba" suffix="+" delay={0.3} />
      <StatItem icon={<Building className="h-8 w-8" />} value={10} label="Hamkor kompaniyalar" suffix="+" delay={0.4} />
    </div>
  )
}
