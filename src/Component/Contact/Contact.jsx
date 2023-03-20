import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <h2>Firma Bilgileri</h2>
        <p>Trend Makina ve Techizat Kimya Sanayi Ticaret Limited Şirketi</p>
        <span>
          Cumhuriyet Mahallesi, Libadiye Caddesi Baraj Yolu Sokak No:8 34697
          Üsküdar - İstanbul - Türkiye
        </span>
        <br />
        <br />
        <h3>Ümraniye Vergi Dairesi 859 056 4318 </h3>
        <div className="contact-tel">
          <p>Tel</p>
          <a href="tel:+902163280496">+90216 3280496</a>
        </div>
        <div className="contact-tel">
          <p>Faks</p>
          <a href="tel:+902163284196">+90216 3284196</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
