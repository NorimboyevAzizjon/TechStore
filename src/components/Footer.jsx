import React from 'react'
import { Link } from 'react-router-dom'
import { Store, Facebook, Instagram, Send, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white">
                <Store className="h-5 w-5" />
              </div>
              <span className="gradient-text">TechStore</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Eng so'nggi texnologiyalar va gadjetlar do'koni. Sifat va ishonchlilik kafolati.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Havolalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-muted-foreground hover:text-primary transition-colors">
                  Sevimlilar
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Savatcha
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Aksiyalar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategoriyalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Smartfonlar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Noutbuklar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Aksessuarlar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart soatlar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Bog'lanish</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +998 90 123 45 67
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                info@techstore.uz
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                Toshkent sh., Chilonzor tumani
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechStore. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-primary transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
