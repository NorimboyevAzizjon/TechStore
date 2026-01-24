import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Alert, AlertDescription } from '../components/ui/alert'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import CartItem from '../components/CartItem'
import { ShoppingBag, AlertCircle, ShoppingCart, Truck, Shield, ArrowRight, Trash2 } from 'lucide-react'

const CartPage = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalPrice, clearCart, getTotalItems } = useCart()
  const { user } = useAuth()

  const handleCheckout = () => {
    if (!user) {
      navigate('/login')
      return
    }
    
    // Savatchani tozalash va Success page ga o'tish
    clearCart()
    navigate('/success')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-purple-100 flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-primary/50" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Savatchangiz bo'sh</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Mahsulotlarni ko'rib chiqing va sevimlilaringizni savatchaga qo'shing
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Xarid qilish
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white">
              <ShoppingCart className="h-6 w-6" />
            </div>
            Savatcha
          </h1>
          <p className="text-muted-foreground mt-2">
            {getTotalItems()} ta mahsulot savatchada
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CartItem item={item} />
              </div>
            ))}
            
            <div className="flex justify-end pt-4">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="rounded-xl text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Savatchani tozalash
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 sticky top-24 border-0 shadow-xl bg-white rounded-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Buyurtma haqida
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Mahsulotlar ({getTotalItems()}):</span>
                  <span className="font-medium">{Number(getTotalPrice()).toLocaleString('uz-UZ')} so'm</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Yetkazib berish:
                  </span>
                  <span className="text-green-600 font-semibold">Bepul</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Jami:</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold gradient-text">{Number(getTotalPrice()).toLocaleString('uz-UZ')}</span>
                      <span className="text-sm text-muted-foreground ml-1">so'm</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {!user && (
                <Alert className="mb-6 bg-amber-50 border-amber-200 rounded-xl">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-700">
                    Buyurtma berish uchun tizimga kiring
                  </AlertDescription>
                </Alert>
              )}
              
              <Button 
                className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all group"
                onClick={handleCheckout}
              >
                {user ? 'Buyurtma berish' : 'Kirish va buyurtma berish'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage