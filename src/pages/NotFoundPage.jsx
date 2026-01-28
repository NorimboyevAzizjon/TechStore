import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Home, Search, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 raqami */}
        <div className="relative mb-8">
          <h1 className="text-[150px] font-bold text-gray-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/30">
              <Search className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Matn */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Sahifa topilmadi
        </h2>
        <p className="text-gray-500 mb-8">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>

        {/* Tugmalar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            asChild
            className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Bosh sahifa
            </Link>
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ortga qaytish
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
