import React from "react";

const countries = [
  {
    id: 1,
    text: "Turkey",
    img: "/img/turkey.png",
  },
  {
    id: 2,
    text: "Northern",
    img: "/img/Northern.png",
  },
  {
    id: 3,
    text: "Cyprus",
    img: "/img/Cyprus.png",
  },
  {
    id: 4,
    text: "Georgia",
    img: "/img/georgia.png",
  },
  {
    id: 5,
    text: "Iran",
    img: "/img/iran.png",
  },
  {
    id: 6,
    text: "Bulgaria",
    img: "/img/bulgaria.png",
  },
  {
    id: 7,
    text: "Turkmenistan",
    img: "/img/turkmenistan.png",
  },
  {
    id: 8,
    text: "Azerbaijan",
    img: "/img/azerbaijan.png",
  },
  {
    id: 9,
    text: "Tajikistan",
    img: "/img/azerbaijan.png",
  },
  {
    id: 10,
    text: "Kazakhstan",
    img: "/img/kazakhstan.png",
  },
  {
    id: 11,
    text: "Uzbekistan",
    img: "/img/uzbekistan.png",
  },
  {
    id: 12,
    text: "Germany",
    img: "/img/germany.png",
  },
  {
    id: 13,
    text: "Mauritania",
    img: "/img/maurtania.png",
  },
  {
    id: 14,
    text: "Libya",
    img: "/img/libya.png",
  },
  {
    id: 15,
    text: "Iraq",
    img: "/img/iraq.png",
  },
  {
    id: 16,
    text: "Kenya",
    img: "/img/kenya.png",
  },
];

const brands = [
  {
    id: 1,
    text: "Fagor -",
    label: "Spain (Complete laundry equipment)",
  },
  {
    id: 2,
    text: "Electrolux -",
    label: "Sweden (Complete laundry equipment)",
  },
  {
    id: 3,
    text: "Schulthess  -",
    label: "Switzerland (Washing and Mop Washing and Drying Machines)",
  },
  {
    id: 4,
    text: "Fagor -",
    label: "Spain (Complete laundry equipment)",
  },
  {
    id: 5,
    text: "Vega  -",
    label:
      "Netherlands (High-tonnage tunnel washing, drying and ironing systems)",
  },
  {
    id: 6,
    text: "Realstar  -",
    label: " Italy (Dry Cleaning Machines)",
  },
  {
    id: 7,
    text: "Italclean  -",
    label: "Italy (Dry Cleaning Machines)",
  },
  {
    id: 8,
    text: "Ghidini  -",
    label: "Italy (Dress and Uniform Ironing Equipment)",
  },
  {
    id: 9,
    text: "Barbanti   -",
    label: "Italy (Dress and Uniform Advanced Ironing Equipment)",
  },
  {
    id: 10,
    text: "Yac   -",
    label: "Japan Dress and Uniform Advanced Ironing Equipment) ",
  },
  {
    id: 11,
    text: "Thermopatch   -",
    label: " Netherlands (Dress and Uniform Marking systems)",
  },
  {
    id: 12,
    text: "Hawo    -",
    label: "Germany (Dress and textile packaging machines)",
  },
  {
    id: 13,
    text: "Seitz    -",
    label: "Germany (Dry cleaning and laundry chemicals)",
  },
];

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about-year">
          <p>Year of foundation:</p>
          <span> 01.03.2012</span>
        </div>
        <div className="about-year">
          <p>Number of Employees:</p>
          <span> 5 personel</span>
        </div>

        <div className="about-countries">
          <h2>Countries We Do Business</h2>
          <div className="about-countries__cont">
            {countries.map((item) => (
              <div className="flag-text" key={item.id}>
                <p>{item.text}</p>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="about-equipment">
          <p>Equipment we produce</p>
          <span>
            Clothes and Uniform conveyors are standard and fully automatic
            systems
          </span>
        </div>
        <div className="about-brands">
          <h2>Brands we represent</h2>

          {brands.map((item) => (
            <div key={item.id} className="about-brands__brand">
              <h3>{item.text}</h3>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
