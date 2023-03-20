import React from "react";

const product = [
  {
    textLabel: "Country",
    textContact: "Contact",
    textCompany: "Company",
    textDesc: "Country",
  },
  {
    id: 1,
    text: "Tahir Gutluyev",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Aşkabat",
    country: "Türkmenistan",
  },
  {
    id: 2,

    text: "Brilliant",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Aşkabat",
    country: "Türkmenistan",
  },
  {
    id: 3,
    text: "Eco Clean",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Lefkoşe",
    country: "Cyprus",
  },
  {
    id: 4,
    text: "Dryclean Express",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Batumi",
    country: "Batumi",
  },
  {
    id: 5,
    text: "Dryclean Express",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Tbilisi",
    country: "Georgia",
  },
  {
    id: 6,
    text: "Gap İnşaat",
    lable: "Mobilizasyon projesi (Çamaşırhane + Kuru Temizleme)",
    desc: "Erzincan",
    country: "Türkiye",
  },
  {
    id: 7,
    text: "Gen İlaç",
    lable: "Çamaşırhane (İlaç Üretim Prosesi)",
    desc: "Ankara",
    country: "Turkiye",
  },
  {
    id: 8,
    text: "Jasmine сухая чистка",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Moskova",
    country: "Rusya",
  },
  {
    id: 9,
    text: "Memorial Hastanesi",
    lable: "Hastane Çamaşırhanesi",
    desc: "Ankara",
    country: "Türkiye",
  },
  {
    id: 10,
    text: "Memorial Hastanesi",
    lable: "Uniforma Konveyörü",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 11,
    text: "Memorial Hastanesi",
    lable: "Uniforma Konveyörü",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 12,
    text: "Selamullah",
    lable: "Komple Kuru Temizleme Tesisi 3 Tesis",
    desc: "Tebriz",
    country: "İran",
  },
  {
    id: 13,
    text: "Hilton Double Tree",
    lable: "Uniforma Konveyörü",
    desc: "Kasımpaşa",
    country: "Türkiye",
  },
  {
    id: 14,
    text: "Ekingen",
    lable: "Çamaşırhane ",
    desc: "Erbil",
    country: "Irak",
  },
  {
    id: 15,
    text: "LLC TD Temirprominvest",
    lable: "Lotos Komple Kuru Temizleme Tesisi",
    desc: "Nur Sultan",
    country: "Kazakistan",
  },
  {
    id: 16,
    text: "Murat Reis Otel ",
    lable: "Uniforma Konveyörü",
    desc: "Sarımsaklı",
    country: "Türkiye",
  },
  {
    id: 17,
    text: "D-Resort Hotel",
    lable: "Uniforma Konveyörü",
    desc: "Göcek",
    country: "Türkiye",
  },
  {
    id: 18,
    text: "Lotus Kuru Temizleme ",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 19,
    text: "JV Mefa ",
    lable: "Komple Kuru Temizleme Tesisi 3 Tesis",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 20,
    text: "JV Mefa ",
    lable: "Komple Kuru Temizleme Tesisi  Samarkand Darvoza AVM",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 21,
    text: "LLC Dryman Service",
    lable: "Contrast Komple Kuru Temizleme Tesisi",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 22,
    text: "Bahar Yıkama",
    lable: "Ticari Çamaşırhane",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 23,
    text: "Erar Kuru Temizleme ",
    lable: "Elbise Konveyörü",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 24,
    text: "Dry Servis Kuru Temizleme",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 25,
    text: "Cadde Kuru Temizleme",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 26,
    text: "Essa Organik Temizleme",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "Konya",
    country: "Türkiye",
  },
  {
    id: 27,
    text: "Gelal Çorap",
    lable: "Tekstil Yıkama Makinaları",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 28,
    text: "Gelal Çorap",
    lable: "Tekstil Yıkama Makinaları",
    desc: "Çorum",
    country: "Türkiye",
  },
  {
    id: 29,
    text: "Ak Naturel Kuru Temizleme",
    lable: "Komple Kuru Temizleme Tesisi Metropol Avm",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 30,
    text: "Eco Dry",
    lable: "Yıkama ve Kurutma Makinaları",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 31,
    text: "Narin Triko",
    lable: "Tekstil Yıkama Makinalası",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 32,
    text: "Pirgulu Hotel",
    lable: "Çamaşırhane",
    desc: "Bakü",
    country: "Azerbaycan",
  },
  {
    id: 33,
    text: "Eco Wet Clean",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "Adıyaman",
    country: "Türkiye",
  },
  {
    id: 34,
    text: "Eco Clean",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "Erzurum",
    country: "Türkiye",
  },
  {
    id: 35,
    text: "Karaman Belediyesi",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Karaman",
    country: "Türkiye",
  },
  {
    id: 36,
    text: "Dry&Dry",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Isparta",
    country: "Türkiye",
  },
  {
    id: 37,
    text: "Dry&Dry",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "Isparta",
    country: "Türkiye",
  },
  {
    id: 38,
    text: "Dryking/Lady Clean",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "Özdilek/İzmit",
    country: "Türkiye",
  },
  {
    id: 39,
    text: "Dryking/Lady Clean",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "İzmit",
    country: "Türkiye",
  },
  {
    id: 40,
    text: "Mavi Akım/Kırklareli",
    lable: "Şantiye Çamaşırhanesi",
    desc: "Kırklareli",
    country: "Türkiye",
  },
  {
    id: 41,
    text: "Regnum Karya Golf Hotel",
    lable: "Gömlek Ütü Robotu",
    desc: "Belek/Antalya",
    country: "Türkiye",
  },
  {
    id: 42,
    text: "Fairmont Hotel",
    lable: "Gömlek Ütü Robotu",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 43,
    text: "Drysistem",
    lable: "Gömlek Ütü Robotu",
    desc: "Ankara",
    country: "Türkiye",
  },
  {
    id: 44,
    text: "Trump Tower",
    lable: "Gömlek Ütü Robotu",
    desc: "Bakü",
    country: "Azerbaycan",
  },
  {
    id: 45,
    text: "Dryport Kuru Tem.",
    lable: "Komple Wet Clean Temizleme Tesisi",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 46,
    text: "Dokuz Eylül Universitesi",
    lable: "Yıkama Makinaları",
    desc: "İzmir",
    country: "Türkiye",
  },
  {
    id: 47,
    text: "Derindere Hastanesi",
    lable: "Yıkama Makinası",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 48,
    text: "Sembol Kuru Tem.",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "İstanbul",
    country: "Türkiye",
  },
  {
    id: 49,
    text: "Eti Maden Tesisleri",
    lable: "Çamaşırhane",
    desc: "Ankara",
    country: "Türkiye",
  },
  {
    id: 50,
    text: "Edition Hotel/Bodrum",
    lable: "Vale ve Personel Çamaşırhanesi",
    desc: "Bodrum",
    country: "Türkiye",
  },
  {
    id: 51,
    text: "Pinachi Drycleaning",
    lable: "Komple Kuru Temizleme Tesisi 2 Tesis",
    desc: "Bakü",
    country: "Azerbaycan",
  },
  {
    id: 52,
    text: "Presidential Residence",
    lable: "Çamaşırhane ve Kuru Temizleme Tesisi",
    desc: "",
    country: "Moritanya",
  },
  {
    id: 53,
    text: "Presidential Residence",
    lable: "Çamaşırhane ve Kuru Temizleme Tesisi",
    desc: "",
    country: "Moritanya",
  },
  {
    id: 54,
    text: "Clean Point Kuru Temizleme",
    lable: "Komple Kuru Temizleme Tesisi",
    desc: "Bursa",
    country: "Türkiye",
  },
  {
    id: 55,
    text: "JV 'Bukhara Cotton Textile ' LLC",
    lable: "Labarotuvar Yıkama Makinaları ve Özel programlar",
    desc: "Buhara ",
    country: "Buhara ",
  },
  {
    id: 56,
    text: "Plastek",
    lable: "Otel Çamaşırhane",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 57,
    text: "Maça Kızı Hotel",
    lable: "Tam Otomatik Uniforma Konveyörü",
    desc: "Bodrum/Muğla",
    country: "Türkiye",
  },
  {
    id: 58,
    text: "LLC Blach Cleaning",
    lable: "Bianka Dry Cleaning Complete Plant",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 59,
    text: "Farovon Hotel",
    lable: "Komple Çamaşırhane",
    desc: "Harezim",
    country: "Özbekistan",
  },
  {
    id: 60,
    text: "LLC Sanora Exclusive",
    lable: "Uno Momento Komple Kuru Temizleme Tesisi",
    desc: "Taşkent",
    country: "Özbekistan",
  },
  {
    id: 61,
    text: "Kervansaray Hotel",
    lable: "Çamaşırhane",
    desc: "Taşkent",
    country: "Özbekistan",
  },
];

const Product = () => {
  return (
    <div className="container">
      <div className="products">
        <div>
          <table>
            <tr>
              <th>Products</th>
              <th>Company Name</th>
              <th>City</th>
              <th>Country</th>
            </tr>
            {product.map((item) => (
              <tr key={item.id}>
                <td>{item.text}</td>
                <td>{item.lable}</td>
                <td>{item.desc}</td>
                <td>{item.country}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
