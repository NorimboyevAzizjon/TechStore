import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onToggleFavorite, isFavorite }) => {
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart();

  const cartItem = cart.items.find(item => item.id === product.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleIncrease = () => {
    if (cartItem) {
      updateQuantity(product.id, itemQuantity + 1);
    } else {
      addToCart(product);
    }
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      updateQuantity(product.id, itemQuantity - 1);
    } else if (itemQuantity === 1) {
      removeFromCart(product.id);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
        
        <button 
          onClick={handleFavoriteClick}
          className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
        >
          <i className={`fas ${isFavorite ? 'fa-heart' : 'fa-heart'}`}></i>
        </button>
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        
        <div className={styles.productPricing}>
          <span className={styles.currentPrice}>{product.price.toLocaleString()} so'm</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={styles.originalPrice}>{product.originalPrice.toLocaleString()} so'm</span>
          )}
        </div>

        {product.originalPrice && product.originalPrice > product.price && (
          <div className={styles.monthlyPayment}>
            {(product.price / 12).toLocaleString('uz-UZ', { maximumFractionDigits: 0 })} so'm/oyiga
          </div>
        )}

        {itemQuantity > 0 ? (
          <div className={styles.quantityControls}>
            <button 
              onClick={handleDecrease}
              className={styles.quantityBtn}
            >
              <i className="fas fa-minus"></i>
            </button>
            <span className={styles.quantity}>{itemQuantity}</span>
            <button 
              onClick={handleIncrease}
              className={styles.quantityBtn}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        ) : (
          <button 
            className={styles.addToCartBtn} 
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <i className="fas fa-shopping-cart"></i>
            {product.inStock ? "Savatga qo'shish" : "Qolmagan"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;