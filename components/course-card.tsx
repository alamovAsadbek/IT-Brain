"use client"

import { Clock, DollarSign, ChevronRight, BookOpen, Banknote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  price: string
  image: string
  level: string
  lessons: number
}

export function CourseCard({ title, description, duration, price, image, level, lessons }: CourseCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="group overflow-hidden rounded-2xl border-none shadow-lg transition-all duration-500 hover:shadow-2xl">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white px-3 py-1 rounded-full shadow-md">
              {level}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="rounded-full bg-[#e6f7e9] p-2">
                <Clock className="h-4 w-4 text-[#0e5c2a]" />
              </div>
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="rounded-full bg-[#e6f7e9] p-2">
                <Banknote className="h-4 w-4 text-[#0e5c2a]" />
                {/*< className="h-4 w-4 text-[#0e5c2a]" />*/}
              </div>
              <span>{price}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="rounded-full bg-[#e6f7e9] p-2">
                <BookOpen className="h-4 w-4 text-[#0e5c2a]" />
              </div>
              <span>{lessons} darslar</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            asChild
            className="w-full bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="#contact">
              Hozir ro'yxatdan o'tish
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
