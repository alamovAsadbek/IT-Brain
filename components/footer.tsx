"use client"

import Link from "next/link"
import {
  Instagram,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="w-full bg-white py-5 relative overflow-hidden">
      {/* Fon o‘rniga ishlaydigan gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e6f7e9] to-white opacity-40 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo va ijtimoiy tarmoqlar */}
          <motion.div className="space-y-2" variants={item}>
            <Link href="/" >
              <img src="/Logo.png" className="w-[100px] md:w-[150px]" alt="IT Brain" />
            </Link>
            <p className="text-gray-600">
              Sifatli ta'lim va amaliy mashg'ulotlar orqali texnologiya
              karyerasini qo'llab-quvvatlash.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a] transition-colors hover:bg-[#0e5c2a] hover:text-white"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tezkor havolalar */}
          <motion.div className="space-y-6" variants={item}>
            <h3 className="text-lg font-semibold text-[#0e5c2a]">
              Tezkor havolalar
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Bosh sahifa" },
                { href: "#features", label: "Xususiyatlar" },
                { href: "#courses", label: "Kurslar" },
                { href: "#contact", label: "Bog'lanish" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0e5c2a] flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kurslar ro'yxati */}
          <motion.div className="space-y-6" variants={item}>
            <h3 className="text-lg font-semibold text-[#0e5c2a]">Kurslar</h3>
            <ul className="space-y-4">
              {[
                "Veb-dasturlash",
                "Ma'lumotlar ilmi",
                "Kiberhavfsizlik",
                "Bulutli hisoblash",
                "Mobil ilovalar yaratish",
              ].map((course, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#0e5c2a] flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bog‘lanish ma’lumotlari */}
          <motion.div className="space-y-6" variants={item}>
            <h3 className="text-lg font-semibold text-[#0e5c2a]">Bog'lanish</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1" />
                <span>Surxondaryo viloyati Denov tumani.</span>
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <span>itbrain.denov@gmail.com</span>
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <a href="915748001">
                  <span>+998 915748001</span>
                </a>
              </li>
            </ul>
            <Button
              asChild
              className="mt-2 bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full"
            >
              <Link href="#contact">Biz bilan bog'laning</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Pastki qism */}
        <motion.div
          className="border-t pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} It Brain o'quv markazi. Barcha
              huquqlar himoyalangan.
            </p>
            <div className="flex gap-6">
              {[
                { href: "#", label: "Maxfiylik siyosati" },
                { href: "#", label: "Foydalanish shartlari" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-[#0e5c2a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
