import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { Menu, X, ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 700, // animatsiya davomiyligi (ms)
      easing: "ease-in-out", // harakat uslubi
      once: true, // faqat bir marta animatsiya bo‘lsin
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo_box" data-aos="fade-right">
          <h1>Dilmurod Varaxshoniy</h1>
        </div>

        {/* Desktop & Mobile */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <div className="navigation" data-aos="fade-down">
            <li>
              <a href="#OurProducts">{t(`products`)}</a>
            </li>

            {/* Dropdown - Marketplace */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="dropdown-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <a href="#">Marketplace</a> <ChevronDown size={16} />
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <a
                    href="https://www.ozon.ru/product/nastennoe-panno-belye-tsvety-naturalnyy-kamen-ruchnaya-rabota-3081136596/?oos_search=false"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ozon
                  </a>
                </li>
                <li>
                  <a
                    href="https://market.yandex.uz/store--naqshband/product/1516496891?businessId=216509330&sku=4752122025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yandex Market
                  </a>
                </li>
                <li>
                  <a
                    href="https://uzum.uz/ru/product/belye-cvety-nastennoe-panno-iz-kamnya-2092843?skuId=7489206"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uzum Market
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Footer">{t(`contact`)}</a>
            </li>
          </div>

          <div className="lang_switcher_mobile">
            <label htmlFor="lang" className="sr-only">
              Language
            </label>
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="en"
            >
              <option value="en">🇬🇧 English</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="uz">🇺🇿 O'zbek</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="tr">🇹🇷 Türkçe</option>
            </select>
          </div>
        </ul>

        {/* Burger Icon */}
        <div
          className={`burger ${isOpen ? "fixed" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
