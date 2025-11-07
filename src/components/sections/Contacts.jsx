import { useState } from "react";
import "../../assets/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formatUz = (digits) => {
    const d = (digits || "")
      .split("")
      .filter((ch) => ch >= "0" && ch <= "9")
      .join("")
      .slice(0, 9);
    const p1 = d.slice(0, 2);
    const p2 = d.slice(2, 5);
    const p3 = d.slice(5, 7);
    const p4 = d.slice(7, 9);
    return `+998 (${p1.padEnd(2, "_")})-${p2.padEnd(3, "_")}-${p3.padEnd(
      2,
      "_"
    )}-${p4.padEnd(2, "_")}`;
  };

  const handleNumberChange = (e) => {
    let raw = e.target.value || "";
    raw = raw
      .split("")
      .filter((ch) => ch >= "0" && ch <= "9")
      .join("");
    if (raw.startsWith("998")) raw = raw.slice(3);
    raw = raw.slice(0, 9);
    setForm((prev) => ({ ...prev, number: raw }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = (form.name || "").trim();
    const digits = (form.number || "").trim();
    if (!name || digits.length !== 9) return;

    const fullNumber = `+998 (${digits.slice(0, 2)}) ${digits.slice(
      2,
      5
    )}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`;

    const to = "rajabovdipmurod77@gmail.com";
    const subject = "Buyurtma so‘rovi";
    const body = `Assalomu alaykum , san'at asarlaringizdan birini xarid qilish uchun murojaat qilyapman!

                Ma’lumotlarim:
                Ismim: ${name}
                Telefon raqamim: ${fullNumber}

                Qayta aloqaga chiqsangiz juda xursand bo'lardim )`;

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const a = document.createElement("a");
    a.href = gmailUrl;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <section id="Contact">
      <div className="contact-container">
        {/* LEFT SIDE — Info */}
        <div className="contact-info">
          <h3>Contacts</h3>
          <img
            src=""
            alt="DILMUROD VARAXSHONIY LOGOTIP"
            className="contact-logo"
          />

          <p>
            Biz bilan bog‘lanish uchun quyidagi shakldan foydalaning yoki
            to‘g‘ridan-to‘g‘ri quyidagi aloqa manzillarimiz orqali murojaat
            qiling.
          </p>

          <div className="contact-links">
            <span>
              📞 <a href="tel:+998959998877">+998 (95) 999-88-77</a>
            </span>
            <div className="socials">
              <a
                href="https://t.me/dilmurod_varaxshoniy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://www.instagram.com/dilmurod.varaxshoniy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/@DilmurodRajabov-eq3gy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="mailto:rajabovdipmurod77@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6107.847574386694!2d64.24434201580809!3d40.05480169426952!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAzJzA2LjEiTiA2NMKwMTUnMTAuNyJF!5e0!3m2!1sru!2s!4v1762525997240!5m2!1sru!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <form
          className="res-form"
          data-aos="fade-up"
          data-aos-delay="600"
          onSubmit={handleSubmit}
        >
          <div className="input-row">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <input
              name="number"
              type="tel"
              inputMode="numeric"
              placeholder="+998 (__)-___-__-__"
              value={formatUz(form.number)}
              onChange={handleNumberChange}
              required
              data-aos="fade-left"
              data-aos-delay="1000"
            />
          </div>

          <button
            type="submit"
            className="res-btn"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            toOrderBtn
          </button>
        </form>
      </div>

      <div className="copyright">
        <p>© 2025 Dilmurod Varaxshoniy. Barcha huquqlar himoyalangan. <br /> Designed by <a href="https://t.me/buxoro_tadbirkorlar_klubi" target="_blank" rel="noopener noreferrer"><strong>Buxoro tadbirkorlar biznes klubi</strong></a></p>
      </div>
    </section>
  );
};

export default Contact;
