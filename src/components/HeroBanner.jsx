import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const banners = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    subtitle: 'Titanium dizayn, A17 Pro chip bilan',
    price: '18 500 000',
    badge: 'Yangi',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=800&hei=800&fmt=jpeg&qlt=95',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-900',
    accentColor: 'bg-amber-500'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    subtitle: 'Galaxy AI bilan yangi davr boshlandi',
    price: '16 000 000',
    badge: 'Top',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/uz/2401/gallery/uz-galaxy-s24-s928-sm-s928bztqskz-thumb-539573400?$720_576_PNG$',
    bgGradient: 'from-violet-900 via-purple-800 to-indigo-900',
    accentColor: 'bg-violet-400'
  },
  {
    id: 3,
    title: 'MacBook Pro 14"',
    subtitle: 'M3 Pro chip - professionallar uchun',
    price: '32 000 000',
    badge: 'Pro',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=800&hei=800&fmt=jpeg&qlt=95',
    bgGradient: 'from-gray-900 via-gray-800 to-black',
    accentColor: 'bg-gray-400'
  },
  {
    id: 4,
    title: 'AirPods Pro 2',
    subtitle: 'USB-C bilan yangilangan versiya',
    price: '3 500 000',
    badge: 'Hit',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=95',
    bgGradient: 'from-sky-600 via-blue-600 to-indigo-700',
    accentColor: 'bg-sky-300'
  },
  {
    id: 5,
    title: 'Sony WH-1000XM5',
    subtitle: 'Premium noise cancelling texnologiyasi',
    price: '4 800 000',
    badge: 'Premium',
    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-1000xm5_Primary_image?$categorypdpnav$',
    bgGradient: 'from-amber-600 via-orange-600 to-red-600',
    accentColor: 'bg-amber-300'
  }
]

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Avtomatik o'zgarish - har 3 sekundda
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % banners.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentBanner = banners[currentIndex]

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${currentBanner.bgGradient} shadow-2xl transition-all duration-700`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="relative container mx-auto px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="flex-1 text-white space-y-4 text-center md:text-left z-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${currentBanner.accentColor} text-black text-sm font-semibold`}>
              <Zap className="h-3 w-3" />
              {currentBanner.badge}
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentBanner.title}
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 max-w-md">
              {currentBanner.subtitle}
            </p>
            
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <span className="text-3xl md:text-4xl font-bold">
                {currentBanner.price}
              </span>
              <span className="text-lg text-white/70">so'mdan</span>
            </div>
            
            <div className="pt-4">
              <Link to="/">
                <Button size="lg" className="rounded-full px-8 bg-white text-gray-900 hover:bg-white/90 hover:shadow-xl transition-all font-semibold">
                  Xarid qilish
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-2xl scale-90" />
            <img
              src={currentBanner.image}
              alt={currentBanner.title}
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transition-all duration-500 hover:scale-110 relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full h-12 w-12 backdrop-blur-sm border border-white/20 transition-all hover:scale-110"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full h-12 w-12 backdrop-blur-sm border border-white/20 transition-all hover:scale-110"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white/60 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / banners.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default HeroBanner
