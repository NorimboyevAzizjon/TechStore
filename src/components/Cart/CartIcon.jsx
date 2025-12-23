import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './CartIcon.module.css';

const CartIcon = () => {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  return (
    <div className={styles.cartIcon}>
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && (
        <span className={styles.cartBadge}>
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;