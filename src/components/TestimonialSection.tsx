
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { testimonials } from "../data/testimonials"
import { ShineBorder } from "@/components/ui/shine-border"
import { DynamicBackground } from "@/components/ui/dynamic-background"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)

    autoplayRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    if (autoplay) {
      startAutoplay()
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleMouseEnter = () => {
    setAutoplay(false)
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
    startAutoplay()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030303] py-32 text-white min-h-[90vh] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Dynamic animated background */}
        <DynamicBackground primaryColor="#708090" secondaryColor="#1a1a1a" speed={0.003} />
      </div>

      <div className="container mx-auto space-y-12 px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-[#708090] mx-auto rounded-full mb-4"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">آراء عملائنا</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نفخر بثقة عملائنا وسعادتهم بخدماتنا على مدار السنوات
          </p>
        </div>

        <div
          className="relative overflow-hidden py-10 px-4 md:px-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-1/2 -right-5 md:right-0 lg:right-4 z-10 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-[#708090]/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-[#708090] transition-all duration-300"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -left-5 md:left-0 lg:left-4 z-10 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-[#708090]/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-[#708090] transition-all duration-300"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  x: direction * -50,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col md:flex-row gap-10 items-center"
              >
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <ShineBorder
                    borderWidth={2}
                    borderColor="rgba(112, 128, 144, 0.4)"
                    shineWidth={150}
                    shineColor="rgba(255, 255, 255, 0.6)"
                    borderRadius="1rem"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#708090]/70 to-[#708090]/30 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
                      <div className="relative overflow-hidden rounded-2xl border-4 border-[#1a1a1a] shadow-xl aspect-square">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={`شهادة من ${testimonials[currentIndex].name}`}
                          className="w-full h-full object-contain bg-black"
                        />
                      </div>
                    </div>
                  </ShineBorder>
                </div>

                <div className="w-full md:w-3/5 rtl">
                  <ShineBorder
                    borderWidth={1}
                    borderColor="rgba(112, 128, 144, 0.3)"
                    shineWidth={200}
                    shineColor="rgba(255, 255, 255, 0.4)"
                    borderRadius="1rem"
                  >
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-[#708090] text-[#708090]" />
                          ))}
                        </div>
                      </div>

                      <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-200">
                        {testimonials[currentIndex].text}
                      </p>

                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-2xl text-[#708090]">
                          {testimonials[currentIndex].name}
                        </h3>
                        <div className="text-md text-gray-400">عميل سعيد</div>
                      </div>
                    </div>
                  </ShineBorder>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-[#708090] w-8" : "bg-gray-700 hover:bg-[#708090]/70",
                )}
                aria-label={`انتقل إلى الشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
