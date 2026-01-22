import { Card } from './ui/card'
import { Button } from './ui/button'
import { useCart } from '../context/CartContext'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <Card className="p-4 border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <Link to={`/product/${item.id}`}>
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={item.image_url || 'https://via.placeholder.com/100x100'}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Link>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-4">
            <div className="min-w-0">
              <Link to={`/product/${item.id}`}>
                <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors truncate">
                  {item.name}
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm line-clamp-1">
                {item.description}
              </p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <div className="text-xl font-bold gradient-text">
                {(item.price * item.quantity).toLocaleString('uz-UZ')}
              </div>
              <div className="text-xs text-muted-foreground">
                so'm
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            {/* Quantity controls */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg hover:bg-white hover:text-red-500 transition-colors"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="w-10 text-center font-bold">
                {item.quantity}
              </span>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg hover:bg-white hover:text-green-500 transition-colors"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Price per unit */}
            <div className="text-sm text-muted-foreground hidden sm:block">
              {Number(item.price).toLocaleString('uz-UZ')} × {item.quantity}
            </div>
            
            {/* Delete button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl"
            >
              <Trash2 className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">O'chirish</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CartItem