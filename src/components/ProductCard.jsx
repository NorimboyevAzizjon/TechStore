import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ShoppingCart, Star, Plus, Minus, Heart, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  
  // Savatchadagi mahsulot miqdorini topish
  const cartItem = cartItems.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0
  const favorite = isFavorite(product.id)

  // Chegirma hisoblab chiqish
  const discount = product.discountPercentage || 0
  const originalPrice = discount > 0 ? Math.round(product.price / (1 - discount / 100)) : null

  return (
    <Card className="overflow-hidden group card-hover border-0 shadow-sm bg-white">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={product.image_url || 'https://via.placeholder.com/300x300'}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="h-4 w-4" />
              Tez ko'rish
            </span>
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.category && (
            <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm text-xs shadow-sm">
              {product.category}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 text-white text-xs">
              -{Math.round(discount)}%
            </Badge>
          )}
          {quantity > 0 && (
            <Badge className="bg-green-500 text-white shadow-sm">
              ✓ {quantity} ta
            </Badge>
          )}
        </div>
        
        {/* Yurakcha tugmasi */}
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(product)
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full shadow-lg transition-all duration-300 btn-bounce ${
            favorite 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/90 text-gray-400 hover:bg-white hover:text-red-500 backdrop-blur-sm'
          }`}
        >
          <Heart 
            className={`h-5 w-5 transition-all ${favorite ? 'fill-current' : ''}`} 
          />
        </button>
      </div>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-base mb-2 hover:text-primary transition-colors line-clamp-1 group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'fill-gray-200 text-gray-200'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.rating.toFixed(1)})</span>
          </div>
        )}
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-lg text-primary">{Number(product.price).toLocaleString('uz-UZ')} so'm</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice.toLocaleString('uz-UZ')} so'm
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {quantity === 0 ? (
          <Button 
            className="w-full rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all btn-bounce"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Savatchaga
          </Button>
        ) : (
          <div className="flex items-center justify-between w-full gap-2 p-1 bg-gray-100 rounded-xl">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-10 w-10 rounded-lg hover:bg-white hover:text-red-500 transition-colors"
              onClick={() => quantity === 1 ? removeFromCart(product.id) : updateQuantity(product.id, quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <span className="font-bold text-lg flex-1 text-center">
              {quantity}
            </span>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="h-10 w-10 rounded-lg hover:bg-white hover:text-green-500 transition-colors"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard