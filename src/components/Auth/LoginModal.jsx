import React, { useState, useEffect } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [smsCode, setSmsCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ESC tugmasi bosilganda yopish
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Modal ochilganda body ga scroll ni block qilamiz
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Modal yopilganda scroll ni qayta yoqamiz
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Overlay bosilganda yopish
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Modal content bosilganda to'xtatamiz (propagation)
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Telefon raqamini formatlash
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else if (numbers.length <= 8) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
    }
  };

  // Telefon raqamini o'zgartirish
  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  // SMS kod olish
  const handleGetCode = async () => {
    if (phoneNumber.replace(/\D/g, '').length !== 12) {
      alert('Iltimos, toʻliq telefon raqamingizni kiriting');
      return;
    }

    setIsLoading(true);
    // Simulyatsiya - 2 soniya kutamiz
    setTimeout(() => {
      setIsLoading(false);
      setIsCodeSent(true);
      alert(`SMS kod +998${phoneNumber.replace(/\D/g, '').slice(3)} raqamiga yuborildi`);
    }, 2000);
  };

  // Kirish
  const handleLogin = () => {
    if (smsCode.length !== 6) {
      alert('Iltimos, 6 xonali SMS kodni kiriting');
      return;
    }

    setIsLoading(true);
    // Simulyatsiya - kirish
    setTimeout(() => {
      setIsLoading(false);
      onLogin(phoneNumber);
      onClose();
      alert('Muvaffaqiyatli kirdingiz!');
    }, 1500);
  };

  // Orqaga qaytish (raqamni o'zgartirish)
  const handleBack = () => {
    setIsCodeSent(false);
    setSmsCode('');
  };

  // Modal yopilganda holatlarni tozalash
  const handleClose = () => {
    setIsCodeSent(false);
    setPhoneNumber('');
    setSmsCode('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.modalHeader}>
          <h2>Kirish</h2>
          <button className={styles.closeBtn} onClick={handleClose}>✕</button>
        </div>

        <div className={styles.modalBody}>
          {!isCodeSent ? (
            <>
              <div className={styles.phoneSection}>
                <label className={styles.label}>Telefon raqamingiz</label>
                <div className={styles.phoneInputWrapper}>
                  <span className={styles.prefix}>+998</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(XX) XXX-XX-XX"
                    className={styles.phoneInput}
                    maxLength={15}
                  />
                </div>
                <p className={styles.helperText}>
                  SMS kodni olish uchun telefon raqamingizni kiriting
                </p>
              </div>

              <button
                onClick={handleGetCode}
                disabled={isLoading || phoneNumber.replace(/\D/g, '').length !== 12}
                className={styles.getCodeBtn}
              >
                {isLoading ? 'Yuborilmoqda...' : 'Kodni olish'}
              </button>
            </>
          ) : (
            <>
              <div className={styles.codeSection}>
                <div className={styles.codeHeader}>
                  <button onClick={handleBack} className={styles.backBtn}>
                    ←
                  </button>
                  <span>SMS kod kiriting</span>
                </div>
                
                <label className={styles.label}>
                  +998{phoneNumber.replace(/\D/g, '').slice(3)} raqamiga yuborilgan kod
                </label>
                <input
                  type="text"
                  value={smsCode}
                  onChange={(e) => setSmsCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="XXXXXX"
                  className={styles.codeInput}
                  maxLength={6}
                />
                <p className={styles.helperText}>
                  6 xonali SMS kodni kiriting
                </p>

                <button
                  onClick={handleLogin}
                  disabled={isLoading || smsCode.length !== 6}
                  className={styles.loginBtn}
                >
                  {isLoading ? 'Tekshirilmoqda...' : 'Kirish'}
                </button>

                <button
                  onClick={handleGetCode}
                  className={styles.resendBtn}
                >
                  Kodni qayta yuborish
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;