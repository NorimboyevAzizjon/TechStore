import React, { useState } from 'react';
import styles from './CityModal.module.css';

const CityModal = ({ isOpen, onClose, onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('Toshkent');

  const cities = [
    'Toshkent',
    'Abdukarim',
    'Ahmad Yassaviy',
    'Alaja',
    'Alamli',
    'Altinko\'l (Qo\'ng\'irot tumani)',
    'Andijon',
    'Angor',
    'Angren',
  
  ];

  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onCitySelect(city);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.modalHeader}>
          <h2>Shaharni tanlang</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.searchSection}>
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                placeholder="Shaharni topish"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className={styles.citiesList}>
            {filteredCities.length === 0 ? (
              <div className={styles.noResults}>
                <i className="fas fa-search"></i>
                Hech qanday shahar topilmadi
              </div>
            ) : (
              filteredCities.map((city, index) => (
                <button
                  key={index}
                  className={`${styles.cityItem} ${selectedCity === city ? styles.selected : ''}`}
                  onClick={() => handleCitySelect(city)}
                >
                  <span className={styles.cityName}>{city}</span>
                  {selectedCity === city && (
                    <i className="fas fa-check"></i>
                  )}
                </button>
              ))
            )}
          </div>
          <div className={styles.selectedCity}>
            <i className="fas fa-map-marker-alt"></i>
            Tanlangan shahar: <strong>{selectedCity}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityModal;