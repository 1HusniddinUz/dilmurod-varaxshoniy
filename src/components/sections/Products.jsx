import { useState } from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import "../../assets/Products.css";

const ProductsData = [
  {
    id: 1,
    name: `Alisher Navoiy`,
    info: `70sm \nGanj maxsulotidan tayyorlangan`,
    img: img1,
    price: `30 000 000 so'm`,
  },
  {
    id: 2,
    name: `Abdulla Qodiriy | Jadidlar tarixi`,
    info: `85x45 \nGanj maxsulotidan tayyorlangan`,
    img: img2,
    price: `20 000 000 so'm`,
  },
  {
    id: 3,
    name: `Amir Temur relefti`,
    info: `45x70 \nGanj maxsulotidan tayyorlangan`,
    img: img3,
    price: `10 000 000 so'm`,
  },
  {
    id: 4,
    name: `Askar sog'inchi`,
    info: `44x54 sm \nToshdan yasalgan granit, shisha, sim`,
    img: img4,
    price: `6 000 000 so'm`,
  },
  {
    id: 5,
    name: `O'zbek qizi relefti`,
    info: `35x47 sm \nGanj, tabiiy tog' toshlaridan tayyorlangan`,
    img: img5,
    price: `3 000 000 so'm`,
  },
  {
    id: 6,
    name: `Navro'z kuni`,
    info: `40x50 sm \nQog'ozda mahogany yog'ida chizilgan`,
    img: img6,
    price: `3 000 000 so'm`,
  },
  {
    id: 7,
    name: `Sevishganlar`,
    info: `50x70 sm \nQog'ozda mahogany yog'ida chizilgan`,
    img: img7,
    price: `3 000 000 so'm`,
  },
  {
    id: 8,
    name: `Ijodiy qiz`,
    info: `70x90 sm \nQog'ozda mahogany yog'ida chizilgan`,
    img: img8,
    price: `4 000 000 so'm`,
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  const visibleProducts = ProductsData.slice(0, visibleCount);

  return (
    <div id="Products">
      <div className="container">
        <h3>San'at asarlar</h3>
        <div className="product_box">
          {visibleProducts.map((item) => (
            <div className="product_card" key={item.id}>
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="product_content">
                <h4>{item.name}</h4>
                <p className="info">{item.info}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="btn_box">
          {visibleCount < ProductsData.length ? (
            <button onClick={showMore} className="btn show_more">
              Ko‘proq ko‘rsatish
            </button>
          ) : (
            <button onClick={showLess} className="btn show_less">
              Kamroq ko‘rsatish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
