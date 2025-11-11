import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { Menu, X, ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Ekran kengligini aniqlash uchun
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dropdown toggle handler
  const handleDropdownToggle = () => {
    if (isMobile) {
      setIsDropdownOpen((prev) => !prev); // faqat mobile-da click bilan ishlaydi
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo_box" data-aos="fade-right">
          <a href="/">
            <img src={logo} alt="DILMUROD VARAXSHONIY LOGO" />
          </a>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <div className="navigation" data-aos="fade-down">
            <li>
              <a href="#Products">{t(`products`)}</a>
            </li>

            {/* Dropdown - Marketplace */}
            <li
              className="dropdown"
              onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
            >
              <button
                className="dropdown-btn"
                onClick={handleDropdownToggle}
              >
                <span>Marketplace</span> <ChevronDown size={16} />
              </button>

              {/* Menyu faqat click orqali ochiladi (mobil) */}
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
              <a href="#Contact">{t(`contact`)}</a>
            </li>
          </div>

          <div className="lang_switcher_mobile">
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="uz"
            >
              <option value="uz">🇺🇿 O'zbek</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
              <option value="tr">🇹🇷 Türkçe</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
          </div>
        </ul>

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
