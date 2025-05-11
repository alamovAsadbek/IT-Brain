"use client"

import Link from "next/link"
import { Instagram, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-white text-black py-5 relative overflow-hidden">
      {/* Fon o‘rniga ishlaydigan gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e6f7e9] to-white opacity-40 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Logo va ijtimoiy tarmoqlar */}
          <div className="space-y-2">
            <Link href="/">
              <img src="/Logo.png" className="w-[100px] md:w-[150px]" alt="IT Brain" />
            </Link>
            <p className="text-gray-700">
              Sifatli ta'lim va amaliy mashg'ulotlar orqali texnologiya
              karyerasini qo'llab-quvvatlash.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/" },
                { icon: <Send className="h-5 w-5" />, label: "Telegram", href: "t.me/itbrain_tc" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a] transition-colors hover:bg-[#0e5c2a] hover:text-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tezkor havolalar */}
          <div className="space-y-6">
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
          </div>

          {/* Kurslar ro'yxati */}
          <div className="space-y-6">
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
          </div>

          {/* Bog‘lanish ma’lumotlari */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#0e5c2a]">Bog'lanish</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1" />
                <a href="https://yandex.uz/maps/-/CHr-fV8l" target='_blank'>Surxondaryo viloyati Denov tumani.</a>
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <a href='mailto:itbrain.denov@gmail.com'>itbrain.denov@gmail.com</a>
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <a href="tel:+998915748001">
                  <span>+998 91 574 80 01</span>
                </a>
              </li>
            </ul>
            <Button
              asChild
              className="mt-2 bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full"
            >
              <Link href="#contact">Biz bilan bog'laning</Link>
            </Button>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t pt-8">
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
        </div>
      </div>
    </footer>
  )
}
