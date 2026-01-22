import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { useFavorites } from '../context/FavoritesContext'
import { useCart } from '../context/CartContext'
import { Heart, ShoppingCart, Trash2, ArrowLeft, Sparkles } from 'lucide-react'

const FavoritesPage = () => {
  const navigate = useNavigate()
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    removeFromFavorites(product.id)
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
            <Heart className="h-12 w-12 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Sevimlilar bo'sh</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Mahsulotlardagi ❤️ tugmasini bosib sevimlilaringizga qo'shing
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="rounded-full px-8 bg-gradient-to-r from-red-500 to-pink-500 hover:shadow-lg hover:shadow-red-200 transition-all"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Mahsulotlarni ko'rish
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/30 to-white py-8">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ortga
        </Button>

        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white">
              <Heart className="h-6 w-6 fill-white" />
            </div>
            Sevimlilar
          </h1>
          <p className="text-muted-foreground mt-2">
            {favorites.length} ta mahsulot saqlangan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product, index) => (
            <Card key={product.id} className="p-5 border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-4">
                <div 
                  className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image_url || 'https://via.placeholder.com/100x100'}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 
                    className="font-semibold text-lg mb-1 cursor-pointer hover:text-primary transition-colors truncate"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="font-bold text-lg gradient-text">
                    {Number(product.price).toLocaleString('uz-UZ')} so'm
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  className="flex-1 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Savatchaga
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => removeFromFavorites(product.id)}
                  className="rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage
