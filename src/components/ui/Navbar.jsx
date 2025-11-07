import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { Menu, X, ChevronDown } from "lucide-react"; // qo'shimcha icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo_box">
            <h1>Dilmurod Varaxshoniy</h1>
        </div>
        {/* Desktop va Mobile Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <div className="navigation">
            <li>
              <a href="#OurProducts">Products</a>
            </li>

            {/* ✅ Dropdown - Marketplace */}
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
                    href="https://uz.ozon.com/product/komplekt-odezhdy-2943543711/?oos_search=false"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ozon
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wildberries.ru/catalog/566919496/detail.aspx?targetUrl=GP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wildberries
                  </a>
                </li>
                <li>
                  <a
                    href="https://market.yandex.uz/card/pidzhak-dlya-zhenshchin-ruchnoy-rabota/4700440763?businessId=216458177&showOriginalKmEmptyOffer=1&ogV=-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yandex Market
                  </a>
                </li>
                <li>
                  <a
                    href="https://uzum.uz/uz/product/ayollar-uchun-qol-ishi-kostyum-2032768"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uzum Market
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Footer">Contacts</a>
            </li>
          </div>

          <div className="lang_switcher_mobile">
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="en"
            >
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
              <option value="uz">🇺🇿 O'zbek</option>
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
