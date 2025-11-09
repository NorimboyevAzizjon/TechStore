import React from 'react';
import styles from './FavoritesSidebar.module.css';

const FavoritesSidebar = ({ isOpen, onClose, favorites, products, onRemoveFavorite, onAddToCart }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const favoriteProducts = products.filter(product => favorites.has(product.id));

  return (
    <div className={styles.favoritesOverlay} onClick={handleOverlayClick}>
      <div className={styles.favoritesSidebar}>
        <div className={styles.favoritesHeader}>
          <h2>Sevimlilar ({favoriteProducts.length})</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.favoritesItems}>
          {favoriteProducts.length === 0 ? (
            <div className={styles.emptyFavorites}>
              <i className="fas fa-heart"></i>
              <p>Sevimlilar ro'yxati bo'sh</p>
              <small>Mahsulotlarni yurakcha belgisi bilan saqlang</small>
            </div>
          ) : (
            favoriteProducts.map(product => (
              <div key={product.id} className={styles.favoriteItem}>
                <img src={product.image} alt={product.name} className={styles.itemImage} />
                
                <div className={styles.itemInfo}>
                  <h4>{product.name}</h4>
                  
                  <div className={styles.itemPricing}>
                    <span className={styles.currentPrice}>{product.price.toLocaleString()} so'm</span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className={styles.originalPrice}>{product.originalPrice.toLocaleString()} so'm</span>
                    )}
                  </div>

                  {product.originalPrice && product.originalPrice > product.price && (
                    <div className={styles.monthlyInfo}>
                      {(product.price / 12).toLocaleString('uz-UZ', { maximumFractionDigits: 0 })} so'm/oyiga
                    </div>
                  )}

                  <button 
                    className={styles.addToCartBtn}
                    onClick={() => onAddToCart(product)}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    Savatga qo'shish
                  </button>
                </div>

                <button 
                  onClick={() => onRemoveFavorite(product.id)}
                  className={styles.removeBtn}
                  title="Sevimlilardan o'chirish"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesSidebar;