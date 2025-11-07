import React, { useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartSidebar from '../Cart/CartSidebar';
import FavoritesSidebar from '../Favorites/FavoritesSidebar';
import LoginModal from '../Auth/LoginModal';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.css';

const Header = ({ favorites, onToggleFavorite, allProducts }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { addToCart } = useCart();

  // Sevimlilardan o'chirish
  const removeFavorite = (productId) => {
    onToggleFavorite(productId);
  };

  // Mahsulotlarni savatga qo'shish
  const handleAddToCartFromFavorites = (product) => {
    addToCart(product);
  };

  // Kirish funksiyasi
  const handleLogin = (phoneNumber) => {
    setIsLoggedIn(true);
    // Bu yerda haqiqiy login logikasi bo'ladi
    console.log('Foydalanuvchi kirdi:', phoneNumber);
  };

  // Chiqish funksiyasi
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className={styles.header}>
        {/* Top info bar */}
        <div className={styles.topInfo}>
          <span>📍 Toshkent</span>
          <span>📦 Topshirish punktlari</span>
          <span>💼 Sotuvchi bo'lish</span>
          <span>🏪 Topshirish punktini ochish</span>
          <span>❓ Savol-javob</span>
          <span>📋 Buyurtmalarim</span>
          <select className={styles.langSelect}>
            <option>O'zbekcha</option>
            <option>Русский</option>
          </select>
        </div>

        {/* Main navigation */}
        <div className={styles.mainNav}>
          <div className={styles.logo}>uzum market</div>
          
          <button className={styles.catalogBtn}>
            <span>☰</span>
            <span>Katalog</span>
          </button>

          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Mahsulotlar va turkumlar izlash" 
            />
            <button>Q</button>
          </div>

          <div className={styles.userActions}>
            {isLoggedIn ? (
              <div className={styles.userMenu}>
                <span className={styles.userName}>Foydalanuvchi</span>
                <button 
                  className={styles.logoutBtn}
                  onClick={handleLogout}
                >
                  Chiqish
                </button>
              </div>
            ) : (
              <button 
                className={styles.loginBtn}
                onClick={() => setIsLoginOpen(true)}
              >
                Kirish
              </button>
            )}
            <button 
              className={styles.favoritesBtn}
              onClick={() => setIsFavoritesOpen(true)}
            >
              ❤️ {favorites.size > 0 && `(${favorites.size})`}
            </button>
            <button 
              className={styles.cartBtn}
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon />
              Savat
            </button>
          </div>
        </div>

        {/* Categories */}
        <nav className={styles.categories}>
          <a href="#">Hafta tovarlari</a>
          <a href="#">Qishki kolleksiya</a>
          <a href="#">Xobbi va ijod</a>
          <a href="#">Turizm, baliq ovi va ovchilik</a>
          <a href="#">Elektronika</a>
          <a href="#">Maishiy texnika</a>
          <a href="#">Kiyim</a>
          <a href="#">Poyabzallar</a>
          <a href="#">Aksessuarlar</a>
          <a href="#">Yana ▼</a>
        </nav>
      </header>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

      <FavoritesSidebar 
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        products={allProducts}
        onRemoveFavorite={removeFavorite}
        onAddToCart={handleAddToCartFromFavorites}
      />

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;