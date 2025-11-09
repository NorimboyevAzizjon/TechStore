import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>{t('footer.about')}</h3>
          <ul>
<<<<<<< HEAD
            <li>{t('footer.delivery_points')}</li>
            <li>{t('footer.vacancies')}</li>
=======
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
            <li>Kompaniya haqida</li>
            <li>Yangiliklar</li>
            <li>Matbuot markazi</li>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>{t('footer.for_users')}</h3>
          <ul>
<<<<<<< HEAD
            <li>{t('footer.contact')}</li>
            <li>{t('footer.faq')}</li>
=======
            <li>Biz bilan bog'lanish</li>
            <li>Savol-Javob</li>
            <li>Qanday buyurtma berish</li>
            <li>To'lov usullari</li>
            <li>Qaytarish siyosati</li>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>{t('footer.for_business')}</h3>
          <ul>
<<<<<<< HEAD
            <li>{t('footer.sell_on_uzum')}</li>
            <li>{t('footer.seller_login')}</li>
            <li>{t('footer.open_delivery_point')}</li>
=======
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
            <li>Topshirish punktini ochish</li>
            <li>Biznes yechimlari</li>
            <li>Reklama</li>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>{t('footer.download_app')}</h3>
          <div className={styles.appButtons}>
<<<<<<< HEAD
            <button className={styles.appStore}>{t('common.app_store')}</button>
            <button className={styles.googlePlay}>{t('common.google_play')}</button>
=======
            <button className={styles.appStore}>
              <span>App Store</span>
            </button>
            <button className={styles.googlePlay}>
              <span>Google Play</span>
            </button>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </div>
          
          <div className={styles.socialLinks}>
<<<<<<< HEAD
            <span>{t('footer.social_media')}</span>
=======
            <span>Uzum ijtimoiy tarmoqlarda</span>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>📱</a>
              <a href="#" className={styles.socialIcon}>📸</a>
              <a href="#" className={styles.socialIcon}>👥</a>
              <a href="#" className={styles.socialIcon}>📺</a>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <p>To'lov usullari</p>
            <div className={styles.paymentIcons}>
              <div className={styles.paymentIcon}>💳</div>
              <div className={styles.paymentIcon}>🏦</div>
              <div className={styles.paymentIcon}>📱</div>
              <div className={styles.paymentIcon}>💰</div>
            </div>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
<<<<<<< HEAD
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.user_agreement')}</a>
=======
          <a href="#">Maxfiylik kelishuvi</a>
          <a href="#">Foydalanuvchi kelishuvi</a>
          <a href="#">Foydalanish shartlari</a>
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
        </div>
        <div className={styles.copyright}>
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;