import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { CheckCircle, Home, ShoppingBag, Package, Truck, Clock } from 'lucide-react'

const SuccessPage = () => {
  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <Card className="w-full max-w-2xl border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl fade-in">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            {/* Success animation */}
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-200">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Tabriklaymiz! 🎉
            </CardTitle>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-md mx-auto">
              Buyurtmangiz muvaffaqiyatli qabul qilindi!
            </p>
            
            {/* Order info card */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Buyurtma raqami</p>
              <p className="text-2xl font-mono font-bold text-primary">{orderNumber}</p>
            </div>
            
            {/* Order steps */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs text-muted-foreground">Tayyorlanmoqda</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-xs text-muted-foreground">Yetkazilmoqda</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-xs text-muted-foreground">1-3 kun</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Xaridingiz uchun rahmat! Operator tez orada siz bilan bog'lanadi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-8">
                  <Home className="mr-2 h-4 w-4" />
                  Bosh sahifaga
                </Button>
              </Link>
              
              <Link to="/">
                <Button className="w-full sm:w-auto rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Xaridni davom ettirish
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SuccessPage