import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/AboutUs.css";

// import toshev from "../../assets/images/toshev.png";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 80
        });
    }, []);
 
    return (
        <section id="AboutUs" className="about" aria-labelledby="aboutus-title" data-aos="fade-up">
            <div className="au-container">
                <figure className="au-photo" data-aos="zoom-in" data-aos-delay="80">
                    {/* <img src={toshev} alt="Davlat Toshev, miniatura ustasi" loading="lazy" /> */}
                    <figcaption className="sr-only">Miniaturist rassom</figcaption>
                    <span className="au-photo-ring" aria-hidden="true" />
                    <span className="au-photo-glow" aria-hidden="true" />
                </figure>

                <div className="au-info">
                    <header className="au-header" data-aos="fade-right" data-aos-delay="120">
                        <h1 id="aboutus-title" className="au-title">Rajabov Dilmurod Xolmurodovich</h1>
                        <div className="au-tags" role="list">
                            <span className="au-chip" role="listitem" data-aos="fade" data-aos-delay="180">Ustoz shogird davomchisi</span>
                            <span className="au-dot" aria-hidden="true">•</span>
                            <span className="au-sub" role="listitem" data-aos="fade" data-aos-delay="220">Haykaltarosh</span>
                        </div>
                    </header>

                    <p className="au-text" data-aos="fade-up" data-aos-delay="260">
                        — Buxoro viloyati Peshku tumani Varaxsho MFYdagi haykaltaroshlik ustaxonasining asoschisi, ijodkor rassom va ustoz. Gips, keramika, sement va yog‘ochda yaratilgan asarlari Buxoro hamda respublika miqyosidagi zamonaviy va tarixiy obidalar qiyofasini boyitadi, restavratsiya ishlarida amaliy qo‘llanadi. Missiyamiz milliy an’analarni zamonaviy estetik qarashlar bilan uyg‘unlashtirib, merosni asrash va yoshlar tarbiyasini qo‘llab-quvvatlashdir. Ustoz yuzdan ortiq shogird yetishtirgan, “Usta-shogird” yo‘nalishidagi hunarmandchilik maktabini yo‘lga qo‘ygan va respublika hamda xalqaro ko‘rgazmalarda muntazam ishtirok etadi. Shuningdek, u qator xalqaro ilmiy maqolalar muallifi bo‘lib, izlanishlari “Xalqaro miqyosdagi ilmiy anjuman materiallari” to‘plamida ham e’lon qilingan. O‘zbekiston Respublikasi Badiiy akademiyasi ijodkorlar uyushmasi a’zosi N. Saidov tomonidan Dilmurod Rajabov uyushma a’zoligiga nomzod sifatida tavsiya etilgan. Hamkorlik yo‘nalishlari: restavratsiya, jamoat makonlari uchun badiiy yechimlar, buyurtma asarlar va ta’lim dasturlari.
                    </p>
                </div>
            </div>
        </section>
    );
}
