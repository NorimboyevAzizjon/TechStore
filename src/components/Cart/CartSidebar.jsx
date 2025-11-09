import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './CartSidebar.module.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [favorites, setFavorites] = useState(new Set());

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.cartOverlay} onClick={handleOverlayClick}>
      <div className={styles.cartSidebar}>
        <div className={styles.cartHeader}>
          <h2>Savat ({cart.items.reduce((total, item) => total + item.quantity, 0)})</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.cartItems}>
          {cart.items.length === 0 ? (
            <p className={styles.emptyCart}>Savat bo'sh</p>
          ) : (
            cart.items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                
                <div className={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={styles.itemPrice}>{item.price.toLocaleString()} so'm</span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className={styles.discountBadge}>ARZON NARX KAFOLATI</span>
                    )}
                  </div>

                  {item.originalPrice && item.originalPrice > item.price && (
                    <div className={styles.monthlyInfo}>
                      {(item.price / 12).toLocaleString('uz-UZ', { maximumFractionDigits: 0 })} so'm/oyiga
                    </div>
                  )}

                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={styles.quantityBtn}
                      disabled={item.quantity <= 1}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.quantityBtn}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className={`${styles.favoriteBtn} ${favorites.has(item.id) ? styles.favoriteActive : ''}`}
                  title="Sevimlilarga qo'shish"
                >
                  <i className={`fas ${favorites.has(item.id) ? 'fa-heart' : 'fa-heart'}`}></i>
                </button>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeBtn}
                  title="O'chirish"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.items.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              <span>Jami:</span>
              <strong>{getCartTotal().toLocaleString()} so'm</strong>
            </div>
            <div className={styles.cartActions}>
              <button className={styles.clearBtn} onClick={clearCart}>
                Tozalash
              </button>
              <button className={styles.checkoutBtn}>
                <i className="fas fa-credit-card"></i>
                Buyurtma berish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;