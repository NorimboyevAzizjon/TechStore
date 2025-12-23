import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onToggleFavorite, isFavorite }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    // Notification: "Mahsulot savatga qo'shildi"
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite && onToggleFavorite(product.id);
  };

  return (
    <div className={styles.productCard} onClick={handleProductClick}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        {product.discount && (
          <div className={styles.discountBadge}>-{product.discount}%</div>
        )}
        
        {/* Favorite button */}
        <button 
          className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={handleFavoriteClick}
        >
          <i className={`fas ${isFavorite ? 'fa-heart' : 'fa-heart'}`}></i>
        </button>
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.brand}>{product.brand}</p>
        
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingCount}>({product.reviews})</span>
        </div>

        <div className={styles.prices}>
          <span className={styles.currentPrice}>{product.price.toLocaleString()} so'm</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{product.originalPrice.toLocaleString()} so'm</span>
          )}
        </div>

        <div className={styles.monthlyPayment}>
          {product.monthlyPrice} so'm/oyiga
        </div>

        <button 
          className={styles.addToCartBtn}
          onClick={handleAddToCart}
        >
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
};

export default ProductCard;