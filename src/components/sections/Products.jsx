import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/9.png";
import "../../assets/Products.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const ProductsData = [
    { id: 1, name: t("product1.name"), info: t("product1.info"), img: img1, price: `30 000 000 so'm` },
    { id: 2, name: t("product2.name"), info: t("product2.info"), img: img2, price: `20 000 000 so'm` },
    { id: 3, name: t("product3.name"), info: t("product3.info"), img: img3, price: `10 000 000 so'm` },
    { id: 4, name: t("product4.name"), info: t("product4.info"), img: img4, price: `6 000 000 so'm` },
    { id: 5, name: t("product5.name"), info: t("product5.info"), img: img5, price: `3 000 000 so'm` },
    { id: 6, name: t("product6.name"), info: t("product6.info"), img: img6, price: `3 000 000 so'm` },
    { id: 7, name: t("product7.name"), info: t("product7.info"), img: img7, price: `3 000 000 so'm` },
    { id: 8, name: t("product8.name"), info: t("product8.info"), img: img8, price: `4 000 000 so'm` },
    { id: 9, name: t("product9.name"), info: t("product9.info"), img: img9, price: `__ 000 000 so'm` },
  ];

  const showMore = () => setVisibleCount((prev) => prev + 3);
  const showLess = () => setVisibleCount(3);
  const visibleProducts = ProductsData.slice(0, visibleCount);

  return (
    <section id="Products">
      <div className="container">
        <h3 data-aos="fade-up">{t("productH3")}</h3>

        <div className="product_box">
          {visibleProducts.map((item, index) => (
            <div
              className="product_card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="product_content">
                <h4>{item.name}</h4>
                <p className="info">{item.info}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="btn_box" data-aos="fade-up">
          {visibleCount < ProductsData.length ? (
            <button onClick={showMore} className="btn show_more">
              {t("productMore")}
            </button>
          ) : (
            <button onClick={showLess} className="btn show_less">
              {t("productClose")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
