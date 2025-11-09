import React, { useState } from 'react';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
// import { Link, useNavigate, useLocation } from "react-router-dom"; // O'CHIRILDI
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
import CartIcon from '../Cart/CartIcon';
import FavoritesSidebar from '../Favorites/FavoritesSidebar';
import LoginModal from '../Auth/LoginModal';
import CityModal from '../City/CityModal';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';

const Header = ({ favorites, onToggleFavorite, allProducts }) => {
<<<<<<< HEAD
  const { t, i18n } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);
=======
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Toshkent');
  const [activeLink, setActiveLink] = useState('/');
<<<<<<< HEAD
  const { addToCart } = useCart();

  // Til o'zgartirish funksiyasi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Link bosilganda active holatini o'zgartirish
  const handleLinkClick = (path) => {
=======
  
  // useNavigate o'rniga oddiy function
  const navigate = (path) => {
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
    setActiveLink(path);
    console.log('Navigate to:', path);
    // Haqiqiy loyihada: window.location.href = path;
  };

  const { addToCart } = useCart();
  const { user, login, logout, isAuthenticated } = useAuth();

  const changeLanguage = (lng) => {
    console.log('Til o\'zgartirildi:', lng);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const removeFavorite = (productId) => {
    onToggleFavorite(productId);
  };

  const handleAddToCartFromFavorites = (product) => {
    addToCart(product);
  };

  const handleLogin = async (phoneNumber, password) => {
    const result = await login(phoneNumber, password);
    if (result.success) {
      setIsLoginOpen(false);
    }
    return result;
  };

  const handleLogout = () => {
    logout();
  };

  // Oddiy Link komponenti
  const Link = ({ to, children, className, onClick }) => (
    <a 
      href={to} 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        setActiveLink(to);
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topInfo}>
          <button 
            className={`${styles.navLink} ${styles.cityBtn} ${activeLink === '/location' ? styles.active : ''}`}
            onClick={() => setIsCityOpen(true)}
          >
            📍 {selectedCity}
          </button>
          <Link 
            to="/delivery-points" 
            className={`${styles.navLink} ${activeLink === '/delivery-points' ? styles.active : ''}`}
          >
<<<<<<< HEAD
            <i className="fas fa-box"></i>
            {t('header.delivery_points')}
          </a>
          <a 
            href="#become-seller" 
=======
            📦 Yetkazib berish punktlari
          </Link>
          <Link 
            to="/become-seller" 
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
            className={`${styles.navLink} ${activeLink === '/become-seller' ? styles.active : ''}`}
          >
<<<<<<< HEAD
            <i className="fas fa-user-tie"></i>
            {t('header.become_seller')}
          </a>
          <a 
            href="#open-point" 
=======
            👔 Sotuvchi bo'lish
          </Link>
          <Link 
            to="/open-point" 
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
            className={`${styles.navLink} ${activeLink === '/open-point' ? styles.active : ''}`}
          >
<<<<<<< HEAD
            <i className="fas fa-store"></i>
            {t('header.open_point')}
          </a>
          <a 
            href="#faq" 
=======
            🏪 Punkt ochish
          </Link>
          <Link 
            to="/faq" 
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
            className={`${styles.navLink} ${activeLink === '/faq' ? styles.active : ''}`}
          >
<<<<<<< HEAD
            <i className="fas fa-question-circle"></i>
            {t('header.faq')}
          </a>
          <a 
            href="#orders" 
=======
            ❓ Savol-Javob
          </Link>
          <Link 
            to="/orders" 
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
            className={`${styles.navLink} ${activeLink === '/orders' ? styles.active : ''}`}
          >
<<<<<<< HEAD
            <i className="fas fa-clipboard-list"></i>
            {t('header.orders')}
          </a>
          <select 
            className={styles.langSelect}
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="uz">
              <i className="fas fa-globe"></i> {t('common.uzbek')}
            </option>
            <option value="ru">
              <i className="fas fa-globe"></i> {t('common.russian')}
            </option>
            <option value="en">
              <i className="fas fa-globe"></i> {t('common.english')}
            </option>
=======
            📋 Buyurtmalar
          </Link>
          <select 
            defaultValue="uz"
            onChange={(e) => changeLanguage(e.target.value)}
            className={styles.langSelect}
          >
            <option value="uz">O'zbekcha</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </select>
        </div>

        {/* Main navigation */}
        <div className={styles.mainNav}>
          <Link to="/" className={styles.logo}>
            🛍️ uzum market
          </Link>
          
<<<<<<< HEAD
          <a 
            href="#catalog" 
            className={styles.catalogBtn}
            onClick={() => handleLinkClick('/catalog')}
          >
            <i className="fas fa-bars"></i>
            <span>{t('header.catalog')}</span>
          </a>

          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder={t('header.search_placeholder')} 
            />
            <button><i className="fas fa-search"></i></button>
=======
          <Link to="/catalog" className={styles.catalogBtn}>
            ☰ Katalog
          </Link>

          <div className={styles.searchBar}>
            <input type="text" placeholder="Mahsulotlar va kategoriyalar qidirish" />
            <button>🔍</button>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </div>

          <div className={styles.userActions}>
            {isAuthenticated ? (
              <div className={styles.userMenu}>
                <span className={styles.userName}>
<<<<<<< HEAD
                  <i className="fas fa-user"></i>
                  {t('header.user')}
                </span>
                <button 
                  className={styles.logoutBtn}
                  onClick={handleLogout}
                >
                  {t('header.logout')}
                </button>
              </div>
            ) : (
              <button 
                className={styles.loginBtn}
                onClick={() => setIsLoginOpen(true)}
              >
                <i className="fas fa-user"></i>
                {t('header.login')}
=======
                  👤 {user?.name || 'Foydalanuvchi'}
                </span>
                <button className={styles.logoutBtn} onClick={handleLogout}>
                  Chiqish
                </button>
              </div>
            ) : (
              <button className={styles.loginBtn} onClick={() => setIsLoginOpen(true)}>
                👤 Kirish
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
              </button>
            )}
            <button className={styles.favoritesBtn} onClick={() => setIsFavoritesOpen(true)}>
              ❤️
              {favorites.size > 0 && <span className={styles.badge}>{favorites.size}</span>}
            </button>
<<<<<<< HEAD
            <button 
              className={styles.cartBtn}
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon />
              {t('header.cart')}
=======
            <button className={styles.cartBtn} onClick={() => navigate('/cart')}>
              🛒 Savat
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
            </button>
          </div>
        </div>

        {/* Categories */}
        <nav className={styles.categories}>
<<<<<<< HEAD
          <a 
            href="#weekly" 
            className={`${styles.categoryLink} ${activeLink === '/weekly' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/weekly')}
          >
            {t('categories.weekly')}
          </a>
          <a 
            href="#winter" 
            className={`${styles.categoryLink} ${activeLink === '/winter' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/winter')}
          >
            {t('categories.winter')}
          </a>
          <a 
            href="#hobby" 
            className={`${styles.categoryLink} ${activeLink === '/hobby' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/hobby')}
          >
            {t('categories.hobby')}
          </a>
          <a 
            href="#tourism" 
            className={`${styles.categoryLink} ${activeLink === '/tourism' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/tourism')}
          >
            {t('categories.tourism')}
          </a>
          <a 
            href="#electronics" 
            className={`${styles.categoryLink} ${activeLink === '/electronics' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/electronics')}
          >
            {t('categories.electronics')}
          </a>
          <a 
            href="#appliances" 
            className={`${styles.categoryLink} ${activeLink === '/appliances' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/appliances')}
          >
            {t('categories.appliances')}
          </a>
          <a 
            href="#clothing" 
            className={`${styles.categoryLink} ${activeLink === '/clothing' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/clothing')}
          >
            {t('categories.clothing')}
          </a>
          <a 
            href="#shoes" 
            className={`${styles.categoryLink} ${activeLink === '/shoes' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/shoes')}
          >
            {t('categories.shoes')}
          </a>
          <a 
            href="#accessories" 
            className={`${styles.categoryLink} ${activeLink === '/accessories' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/accessories')}
          >
            {t('categories.accessories')}
          </a>
          <a 
            href="#more" 
            className={`${styles.categoryLink} ${activeLink === '/more' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/more')}
          >
            {t('categories.more')} <i className="fas fa-chevron-down"></i>
          </a>
=======
          <Link to="/weekly" className={`${styles.categoryLink} ${activeLink === '/weekly' ? styles.active : ''}`}>
            Haftalik taklif
          </Link>
          <Link to="/winter" className={`${styles.categoryLink} ${activeLink === '/winter' ? styles.active : ''}`}>
            Qishki mahsulotlar
          </Link>
          <Link to="/hobby" className={`${styles.categoryLink} ${activeLink === '/hobby' ? styles.active : ''}`}>
            Hobbi
          </Link>
          <Link to="/tourism" className={`${styles.categoryLink} ${activeLink === '/tourism' ? styles.active : ''}`}>
            Turizm
          </Link>
          <Link to="/electronics" className={`${styles.categoryLink} ${activeLink === '/electronics' ? styles.active : ''}`}>
            Elektronika
          </Link>
          <Link to="/appliances" className={`${styles.categoryLink} ${activeLink === '/appliances' ? styles.active : ''}`}>
            Maishiy texnika
          </Link>
          <Link to="/clothing" className={`${styles.categoryLink} ${activeLink === '/clothing' ? styles.active : ''}`}>
            Kiyimlar
          </Link>
          <Link to="/shoes" className={`${styles.categoryLink} ${activeLink === '/shoes' ? styles.active : ''}`}>
            Oyoq kiyim
          </Link>
          <Link to="/accessories" className={`${styles.categoryLink} ${activeLink === '/accessories' ? styles.active : ''}`}>
            Aksessuarlar
          </Link>
          <Link to="/more" className={`${styles.categoryLink} ${activeLink === '/more' ? styles.active : ''}`}>
            Boshqalar ▼
          </Link>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
        </nav>
      </header>

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

      <CityModal 
        isOpen={isCityOpen}
        onClose={() => setIsCityOpen(false)}
        onCitySelect={handleCitySelect}
      />
    </>
  );
};

export default Header;