import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import HeroBanner from '../components/HeroBanner'
import { getProducts, getCategories, getProductsByCategory, searchProducts } from '../lib/api'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { Button } from '../components/ui/button'
import { Sparkles, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // URL dan search query ni olish
  const searchQuery = searchParams.get('search') || ''

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery)
    } else {
      loadInitialData()
    }
  }, [searchQuery])

  const handleSearch = async (query) => {
    setLoading(true)
    try {
      const data = await searchProducts(query)
      setProducts(data)
      const categoriesData = await getCategories()
      setCategories(categoriesData)
    } catch (err) {
      setError('Qidirishda xatolik')
    } finally {
      setLoading(false)
    }
  }

  const loadInitialData = async () => {
    try {
      setLoading(true)
      const [productsData, categoriesData] = await Promise.all([
        getProducts(30),
        getCategories()
      ])
      setProducts(productsData)
      setCategories(categoriesData)
    } catch (err) {
      setError('Mahsulotlarni yuklashda xatolik yuz berdi')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category)
    setLoading(true)
    try {
      if (category) {
        const data = await getProductsByCategory(category)
        setProducts(data)
      } else {
        const data = await getProducts(30)
        setProducts(data)
      }
    } catch (err) {
      setError('Xatolik yuz berdi')
    } finally {
      setLoading(false)
    }
  }

  if (error) return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center p-8 rounded-2xl bg-red-50 border border-red-200">
        <p className="text-red-500 font-medium">{error}</p>
        <Button onClick={loadInitialData} className="mt-4" variant="outline">
          Qayta urinish
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-6">
        {/* Search natijasi ko'rsatish */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20 fade-in">
            <p className="text-sm">
              <span className="text-muted-foreground">Qidiruv natijasi: </span>
              <span className="font-semibold text-primary">"{searchQuery}"</span>
              <span className="text-muted-foreground"> - {products.length} ta mahsulot topildi</span>
            </p>
          </div>
        )}
        
        {/* Kategoriyalar */}
        <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border fade-in">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange('')}
              className={`rounded-full transition-all ${selectedCategory === '' ? 'bg-gradient-to-r from-primary to-purple-600 shadow-md' : 'hover:border-primary hover:text-primary'}`}
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Barchasi
            </Button>
            {categories.slice(0, 10).map((cat) => (
              <Button
                key={cat.slug}
                variant={selectedCategory === cat.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full transition-all ${selectedCategory === cat.slug ? 'bg-gradient-to-r from-primary to-purple-600 shadow-md' : 'hover:border-primary hover:text-primary'}`}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Hero Banner */}
        <div className="mb-8">
          <HeroBanner />
        </div>

        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <TrendingUp className="h-7 w-7 text-primary" />
              {selectedCategory ? categories.find(c => c.slug === selectedCategory)?.name || 'Mahsulotlar' : 'Ommabop Mahsulotlar'}
            </h1>
            <p className="text-muted-foreground mt-1">
              {products.length} ta mahsulot topildi
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border fade-in">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mahsulotlar topilmadi</h3>
            <p className="text-muted-foreground mb-4">Boshqa so'z bilan qidirib ko'ring</p>
            <Button onClick={() => { setSearchQuery(''); loadInitialData(); }} variant="outline" className="rounded-full">
              Barchasini ko'rish
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((product, index) => (
              <div key={product.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage