"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const message = `
🟢 *Yangi so‘rov!*

👤 Ism: ${formData.name}
👨‍👩‍👧‍👦 Familya: ${formData.surname}
📱 Telefon: ${formData.phone}
🎓 Kurs: ${formData.course}
💬 Xabar: ${formData.message}
      `

      toast({
        title: "Xabar yuborildi!",
        description: `Ism: ${formData.name}\nFamilya: ${formData.surname}\nTelefon: ${formData.phone}\nKurs: ${formData.course}\nXabar: ${formData.message}`,
      })

      const telegramToken = "7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0"
      const chatId = "-1002259806656"
      const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage`

      const response = await fetch(telegramURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      })

      if (!response.ok) {
        throw new Error("Telegram API xatosi")
      }

      setFormData({
        name: "",
        surname: "",
        phone: "",
        course: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Xatolik yuz berdi.",
        description: "Iltimos, keyinroq qayta urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.form onSubmit={handleSubmit} className="space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div className="grid gap-6 sm:grid-cols-2" variants={item}>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Ism</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ismingiz"
            className="h-12 rounded-lg"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="surname" className="text-sm font-medium">Familya</label>
          <Input
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Familyangiz"
            className="h-12 rounded-lg"
            required
          />
        </div>
      </motion.div>

      <motion.div className="grid gap-6 sm:grid-cols-2" variants={item}>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Telefon raqami</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+998..."
            className="h-12 rounded-lg"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="course" className="text-sm font-medium">Kurs tanlang</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border px-3"
            required
          >
            <option value="">Kursni tanlang</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="Backend">Backend</option>
            <option value="Kompyuter savodxonligi">Kompyuter savodxonligi</option>
          </select>
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={item}>
        <label htmlFor="message" className="text-sm font-medium">Xabar</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Xabaringizni yozing..."
          className="min-h-[150px] rounded-lg"
          required
        />
      </motion.div>

      <motion.div variants={item}>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Yuborilmoqda...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Xabar yuborish
              <Send className="h-4 w-4" />
            </span>
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}
