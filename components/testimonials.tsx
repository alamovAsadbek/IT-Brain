"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Oybek ",
    role: "IT Brain veb-dasturchi",
    image: "",
    content:
      "It Brain'dagi veb-dasturlash kursi mening karyeramni butunlay o'zgartirdi. Amaliy yondashuv va tajribali o'qituvchilar menga bitiruvdan keyin bir necha hafta ichida orzu qilgan ishimni topishga yordam berdi.",
    rating: 5,
  },
  {
    id: 2,
    name: " Asadbek",
    role: "IT Brain veb-dasturchi",
    image: "",
    content:
      "Men bir necha oy davomida ma'lumotlar ilmini o'z-o'zimdan o'rganishga harakat qildim, lekin natija kam edi. It Brain'dagi tuzilgan o'quv dasturi va mentorlik katta farq yaratdi. Juda tavsiya etaman!",
    rating: 5,
  },
  {
    id: 3,
    name: " Sodiq",
    role: "IT Brain veb-dasturchi",
    image: "",
    content:
      "Kiberhavfsizlik dasturi menga ishimda har kuni foydalanadigan amaliy ko'nikmalarni berdi. O'qituvchilar haqiqiy dunyo tajribasini ulashadigan sanoat mutaxassislaridir.",
    rating: 4,
  },
  {
    id: 4,
    name: "Amriddin",
    role: "IT Brain veb-dasturchi",
    image: "",
    content:
      "To'liq stack dasturlash bootcampini tugatgandan so'ng, men texnik bo'lmagan lavozimdan dasturchi lavozimiga o'ta oldim. Karyera qo'llab-quvvatlash ajoyib edi.",
    rating: 5,
  },
  {
    id: 5,
    name: "Annur",
    role: "IT Brain Backend dasturchi",
    image: "",
    content:
      "Bulutli hisoblash kursi menga karyeramni o'zgartirish uchun zarur ko'nikmalar va ishonchni berdi. Laboratoriya va loyihalar qiyin, lekin haqiqiy dunyo amaliyoti uchun juda qimmatli edi.",
    rating: 5,
  },
  {
    id: 6,
    name: "Asliddin",
    role: "IT Brain Backend dasturchi",
    image: "",
    content:
      "Men It Brain'da 12 hafta davomida o'z-o'zimdan o'rganishga sarflagan bir yilga qaraganda ko'proq narsani o'rgandim. O'quv dasturi eng so'nggi sanoat standartlari va texnologiyalari bilan yangilangan.",
    rating: 4,
  },
  {
    id: 7,
    name: "Umid",
    role: "IT Brain veb-dasturchi",
    image: "",
    content:
      "Men It Brain'da 12 hafta davomida o'z-o'zimdan o'rganishga sarflagan bir yilga qaraganda ko'proq narsani o'rgandim. O'quv dasturi eng so'nggi sanoat standartlari va texnologiyalari bilan yangilangan.",
    rating: 9,
  },
  {
    id: 8,
    name: "Og'abek",
    role: "IT Brain Frontend dasturchi",
    image: "",
    content:
      "Bulutli hisoblash kursi menga karyeramni o'zgartirish uchun zarur ko'nikmalar va ishonchni berdi. Laboratoriya va loyihalar qiyin, lekin haqiqiy dunyo amaliyoti uchun juda qimmatli edi.",
    rating: 8,
  },
  {
    id: 9,
    name: "Avazbek",
    role: "IT Brain Backend dasturchi",
    image: "",
    content:
      "Men It Brain'da 12 hafta davomida o'z-o'zimdan o'rganishga sarflagan bir yilga qaraganda ko'proq narsani o'rgandim. O'quv dasturi eng so'nggi sanoat standartlari va texnologiyalari bilan yangilangan.",
    rating: 4,
  },
  {
    id: 10,
    name: "Siroj",
    role: "IT Brain Frontend dasturchi",
    image: "",
    content:
      "Bulutli hisoblash kursi menga karyeramni o'zgartirish uchun zarur ko'nikmalar va ishonchni berdi. Laboratoriya va loyihalar qiyin, lekin haqiqiy dunyo amaliyoti uchun juda qimmatli edi.",
    rating: 4,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const isMobile = useMobile()
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
    setAutoplay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
    setAutoplay(false)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, totalPages])

  const visibleTestimonials = () => {
    const start = (currentIndex * itemsPerPage) % testimonials.length
    const end = Math.min(start + itemsPerPage, testimonials.length)

    if (end < start + itemsPerPage) {
      return [...testimonials.slice(start), ...testimonials.slice(0, itemsPerPage - (testimonials.length - start))]
    }

    return testimonials.slice(start, end)
  }

  return (
    <div className="relative space-y-10 py-4" ref={testimonialsRef}>
      <div className="flex flex-wrap gap-8 justify-center">
        <AnimatePresence mode="wait">
          {visibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:max-w-[350px]"
            >
              <Card
                className={cn(
                  "overflow-hidden border-none shadow-lg bg-white rounded-2xl transition-all duration-500 h-full",
                  index === 1 && !isMobile ? "sm:scale-105 sm:shadow-xl" : "",
                )}
              >
                <CardContent className="p-8 relative h-full">
                  <div className="absolute top-4 right-4 text-[#0e5c2a]/20">
                    <Quote className="h-12 w-12 rotate-180" />
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#0e5c2a] rounded-full blur-sm opacity-20"></div>
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative h-16 w-16 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-6 items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#0e5c2a] text-[#0e5c2a] hover:bg-[#e6f7e9] hover:text-[#0e5c2a] h-12 w-12 shadow-md"
            onClick={handlePrevious}
            aria-label="Oldingi fikrlar"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </motion.div>

        <div className="flex gap-2 items-center">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`h-3 rounded-full transition-all ${
                i === currentIndex ? "w-10 bg-[#0e5c2a]" : "w-3 bg-[#0e5c2a]/30"
              }`}
              onClick={() => {
                setCurrentIndex(i)
                setAutoplay(false)
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#0e5c2a] text-[#0e5c2a] hover:bg-[#e6f7e9] hover:text-[#0e5c2a] h-12 w-12 shadow-md"
            onClick={handleNext}
            aria-label="Keyingi fikrlar"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
