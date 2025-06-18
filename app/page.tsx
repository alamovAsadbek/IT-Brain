import Link from "next/link"
import {ChevronRight, BookOpen, Users, Award, Mail, Phone, MapPin, ArrowRight, CheckCircle} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {ContactForm} from "@/components/contact-form"
import {Testimonials} from "@/components/testimonials"
import {CourseCard} from "@/components/course-card"
import {NavBar} from "@/components/nav-bar"
import {Footer} from "@/components/footer"
import {StatsCounter} from "@/components/stats-counter"
import {FeaturedBrands} from "@/components/featured-brands"
import {HeroBackground} from "@/components/hero-background"
import {ScrollReveal} from "@/components/scroll-reveal"
import {FloatingShapes} from "@/components/floating-shapes"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <NavBar/>

            {/* Hero Section */}
            <section className="relative w-full overflow-hidden py-10 md:py-13 lg:py-15">
                <HeroBackground/>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <ScrollReveal>
                            <div className="flex flex-col justify-center space-y-8">
                                <div
                                    className="inline-flex items-center rounded-full border border-[#0e5c2a]/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#0e5c2a] shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-[#0e5c2a] mr-2"></span>
                                    Zamonaviy IT ta'lim markazi.
                                </div>
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0e5c2a]">
                                        IT Brain bilan {" "}
                                        <span className="relative inline-block">
                      texnologik
                      <span
                          className="absolute bottom-2 left-0 w-full h-3 bg-[#0e5c2a]/10 -z-10 transform -rotate-1"></span>
                    </span>
                                        {" "}
                                        salohiyatingizni ochib bering.
                                    </h1>
                                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                                        Bugungi texnologiya sohasida kerak bo'ladigan ko'nikmalarni o'zlashtirishga
                                        mo'ljallangan keng
                                        qamrovli IT o'quv dasturlari.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <Link href="#courses">
                                            Kurslarni ko'rish
                                            <ChevronRight className="ml-2 h-4 w-4"/>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-[#0e5c2a] text-[#0e5c2a] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#e6f7e9]"
                                    >
                                        <Link href="#contact">Biz bilan bog'laning</Link>
                                    </Button>
                                </div>
                                <div className="pt-6">
                                    <FeaturedBrands/>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="relative mx-auto w-full max-w-[320px] md:max-w-[550px]">
                                <div
                                    className="absolute inset-0 bg-[#0e5c2a] rounded-2xl blur-xl opacity-10 transform rotate-6"></div>
                                <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
                                    <img src="/hero-image.jpg" alt="IT Brain Training"
                                         className="aspect-square object-cover w-full"/>
                                </div>
                                <div
                                    className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 animate-bounce-slow">


                                    <div className="flex items-center">
                                        <div className="border rounded-full bg-gray-200 w-8 h-8 z-30"></div>
                                        <div className="border rounded-full bg-gray-300 w-8 h-8 -ml-3 z-20"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">200+ talaba</p>
                                        <div className="flex text-yellow-500">
                                            <span>★★★★★</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 animate-pulse-slow">
                                    <div className="bg-[#e6f7e9] rounded-lg p-2">
                                        <CheckCircle className="h-6 w-6 text-[#0e5c2a]"/>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-16 bg-white relative overflow-hidden">
                <FloatingShapes/>
                <div className="container px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <StatsCounter/>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-24 md:py-32 lg:py-40 relative" id="features">
                <div className="absolute inset-0 bg-[url('/pattern-bg.jpg')] bg-cover bg-center opacity-5"></div>
                <div className="container px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <div
                                className="inline-flex items-center rounded-full border border-[#0e5c2a]/20 bg-white px-4 py-2 text-sm font-medium text-[#0e5c2a] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#0e5c2a] mr-2"></span>
                                Nega bizni tanlash kerak
                            </div>
                            <div className="space-y-4 max-w-3xl">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e5c2a]">
                                    IT karyerangizni qo'llab-quvvatlash
                                </h2>
                                <p className="text-gray-600 md:text-xl/relaxed">
                                    It Brain'da biz haqiqiy dunyo muammolariga tayyorlanish uchun amaliy tajriba va
                                    sanoat yetakchi
                                    o'qitish bilan ta'minlaymiz.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <ScrollReveal delay={0.1}>
                            <div
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-500">
                                <div
                                    className="absolute top-0 right-0 h-24 w-24 bg-[url('/feature-bg-1.jpg')] bg-cover rounded-bl-full opacity-20 transition-all group-hover:opacity-30"></div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#e6f7e9] text-[#0e5c2a] transition-transform group-hover:scale-110 duration-300">
                                        <BookOpen className="h-8 w-8"/>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-[#0e5c2a]">Ekspert o'quv dasturi</h3>
                                    <p className="text-gray-600">
                                        Joriy bozor talablari va texnologiyalarga mos keladigan sanoat ekspertlari
                                        tomonidan ishlab
                                        chiqilgan kurslar.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-500">
                                <div
                                    className="absolute top-0 right-0 h-24 w-24 bg-[url('/feature-bg-2.jpg')] bg-cover rounded-bl-full opacity-20 transition-all group-hover:opacity-30"></div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#e6f7e9] text-[#0e5c2a] transition-transform group-hover:scale-110 duration-300">
                                        <Users className="h-8 w-8"/>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-[#0e5c2a]">Kichik guruhlar</h3>
                                    <p className="text-gray-600">
                                        Yaxshiroq o'quv natijalari uchun har bir guruhda cheklangan talabalar soni bilan
                                        shaxsiy e'tibor.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-500 md:col-span-2 lg:col-span-1">
                                <div
                                    className="absolute top-0 right-0 h-24 w-24 bg-[url('/feature-bg-3.jpg')] bg-cover rounded-bl-full opacity-20 transition-all group-hover:opacity-30"></div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#e6f7e9] text-[#0e5c2a] transition-transform group-hover:scale-110 duration-300">
                                        <Award className="h-8 w-8"/>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-[#0e5c2a]">Sertifikatlashtirish</h3>
                                    <p className="text-gray-600">
                                        Rezyumengizni va karyera istiqbollaringizni oshirish uchun sanoat tomonidan tan
                                        olingan
                                        sertifikatlar.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="relative w-full py-24 md:py-32 lg:py-40" id="courses">
                <div
                    className="absolute inset-0 bg-[url('/courses-bg.jpg')] bg-cover bg-fixed bg-center opacity-5"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <ScrollReveal>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <div
                                className="inline-flex items-center rounded-full border border-[#0e5c2a]/20 bg-white px-4 py-2 text-sm font-medium text-[#0e5c2a] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#0e5c2a] mr-2"></span>
                                Bizning dasturlar
                            </div>
                            <div className="space-y-4 max-w-3xl">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e5c2a]">
                                    Bizning kurslarimiz
                                </h2>
                                <p className="text-gray-600 md:text-xl/relaxed">
                                    IT sohasida muvaffaqiyatga erishishga yordam berish uchun mo'ljallangan keng
                                    qamrovli o'quv
                                    dasturlarimizni o'rganing.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <ScrollReveal delay={0.1}>
                            <CourseCard
                                title="Front-End"
                                description="HTML, CSS, JavaScript va React va Next.js kabi zamonaviy freymvorklarni o'rganing."
                                duration="36 hafta"
                                price="400 000 so'm"
                                image="/web-dev-course.jpg"
                                level="Boshlang'ich - O'rta"
                                lessons={108}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <CourseCard
                                title="Backend"
                                description="Python, ma'lumotlarni tahlil qilish, mashinali o'rganish va vizualizatsiya texnikalarini o'rganing."
                                duration="32 hafta"
                                price="400 000 so'm"
                                image="/data-science-course.jpg"
                                level="O'rta"
                                lessons={96}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <CourseCard
                                title="Kompyuter savodxonligi"
                                description="Tarmoq xavfsizligi, etik hacking va tahdidlarni tahlil qilish bo'yicha ko'nikmalarni rivojlantiring."
                                duration="8 hafta"
                                price="400 000 so'm"
                                image="/cybersecurity-course.jpg"
                                level="O'rta - Yuqori"
                                lessons={24}
                            />
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.4}>
                        <div className="flex justify-center mt-16">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#0e5c2a] hover:bg-[#0e5c2a]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Link href="#contact">
                                    Kurs haqida ma'lumot so'rash
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-24 md:py-32 lg:py-40 relative">
                <div className="absolute inset-0 bg-[url('/testimonials-bg.jpg')] bg-cover bg-center opacity-5"></div>

                <div className="container px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <div
                                className="inline-flex items-center rounded-full border border-[#0e5c2a]/20 bg-white px-4 py-2 text-sm font-medium text-[#0e5c2a] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#0e5c2a] mr-2"></span>
                                Muvaffaqiyat hikoyalari
                            </div>
                            <div className="space-y-4 max-w-3xl">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e5c2a]">
                                    Talabalarimiz fikrlari
                                </h2>
                                <p className="text-gray-600 md:text-xl/relaxed">
                                    It Brain bilan karyeralarini muvaffaqiyatli o'zgartirgan bitiruvchilarimiz
                                    fikrlarini eshiting.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Testimonials/>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative w-full py-24 md:py-32 lg:py-40" id="contact">
                <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-5"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
                        <ScrollReveal>
                            <div className="flex flex-col justify-center space-y-8">
                                <div
                                    className="inline-flex items-center rounded-full border border-[#0e5c2a]/20 bg-white px-4 py-2 text-sm font-medium text-[#0e5c2a] shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-[#0e5c2a] mr-2"></span>
                                    Bog'lanish
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0e5c2a]">
                                        Biz bilan bog'laning
                                    </h2>
                                    <p className="text-gray-600 md:text-xl/relaxed">
                                        Kurslarimiz haqida savollaringiz bormi yoki tashrif buyurishni
                                        rejalashtirmoqchimisiz? Biz bilan
                                        bog'laning va jamoamiz tez orada siz bilan bog'lanadi.
                                    </p>
                                </div>
                                <div className="space-y-8 pt-4">
                                    <div className="flex items-center gap-5">
                                        <div
                                            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a]">
                                            <Phone className="h-6 w-6"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Telefon</p>
                                       <a href="tel:+998915748001" className="font-medium">+998915748001</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div
                                            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a]">
                                            <Mail className="h-6 w-6"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-medium">itbrain.denov@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div
                                            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f7e9] text-[#0e5c2a]">
                                            <MapPin className="h-6 w-6"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Manzil</p>
                                            <p className="font-medium">Surxondaryo viloyati Denov tumani.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="relative">
                                <div
                                    className="absolute inset-0 bg-[#0e5c2a] rounded-2xl blur-xl opacity-5 transform rotate-3"></div>
                                <div
                                    className="relative rounded-2xl border border-[#e6f7e9] bg-white p-8 md:p-10 shadow-xl">
                                    <ContactForm/>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="w-full py-20 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/newsletter-bg.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-[#0e5c2a]/90 backdrop-blur-sm"></div>

                <div className="container px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="space-y-4 md:max-w-md">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">Yangilanib
                                    turing</h2>
                                <p className="text-[#e6f7e9] md:text-lg">
                                    Eng so'nggi kurs yangiliklari, texnologiya yangiliklari va maxsus takliflar uchun
                                    bizning axborot
                                    byulletenimizga obuna bo'ling.
                                </p>
                            </div>
                            <div className="w-full md:w-auto">
                                <form className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            placeholder="Emailingizni kiriting"
                                            className="min-w-[300px] bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white rounded-full pl-5 h-12"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="bg-white text-[#0e5c2a] hover:bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Obuna bo'lish
                                    </Button>
                                </form>
                                <p className="mt-3 text-xs text-[#e6f7e9]/80">
                                    Biz sizning maxfiyligingizni hurmat qilamiz. Istalgan vaqtda obunani bekor
                                    qilishingiz mumkin.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
