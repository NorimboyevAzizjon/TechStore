import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Biz hadimizda</h3>
          <ul>
            <li>Topshirish punktlari</li>
            <li>Biz bilan bog'ianish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Foydalanuvchilarga</h3>
          <ul>
            <li>Topshirish punktlari</li>
            <li>Biz bilan bog'ianish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Tadbirkorlarga</h3>
          <ul>
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
            <li>Topshirish punktini ochish</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Ilovani yuklab olish</h3>
          <div className={styles.appButtons}>
            <button className={styles.appStore}>
              <span>AppStore</span>
            </button>
            <button className={styles.googlePlay}>
              <span>Google Play</span>
            </button>
          </div>
          
         <div className={styles.socialSection}>
  <h3>Uzum jitimoiy tarmoqlarda</h3>
  <div className={styles.socialIcons}>
    <a href="#" className={styles.socialIcon} aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className={styles.socialIcon} aria-label="Telegram">
      <i className="fab fa-telegram"></i>
    </a>
    <a href="#" className={styles.socialIcon} aria-label="YouTube">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="#" className={styles.socialIcon} aria-label="Facebook">
      <i className="fab fa-facebook"></i>
    </a>
  </div>
</div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
          <a href="#">Maxfiylik kelishuvi</a>
          <a href="#">Foydalanuvchi kelishuvi</a>
        </div>

        <div className={styles.copyright}>
          &copy; 2025 XX.MCHJ +UZUM MARKET, STIR 309376127. Barcha hungular himoya
        </div>
      </div>
    </footer>
  );
};

export default Footer;