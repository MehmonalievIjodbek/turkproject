import React from "react";
import FeatureIcon from "../../static/feature-icon";

const fields = [
  {
    id: 1,
    text: "Hotel Laundry Equipment, installation, capacity analysis, operating cost analysis and project design services, services, consultancy services",
    icon: <FeatureIcon />,
  },
  {
    id: 2,
    text: " Mop systems Advanced package contents, training and consultancy on floor and space cleaning",
    icon: <FeatureIcon />,
  },
  {
    id: 3,
    text: "Hotel Laundry Equipment, installation, capacity analysis, operating cost analysis and project design services, services, consultancy services",
    icon: <FeatureIcon />,
  },
  {
    id: 4,
    text: "Dry Cleaning stores equipment supply, installation, chemical and consumable supply consultancy, project and service",
    icon: <FeatureIcon />,
  },
  {
    id: 5,
    text: "Commercial laundry Laundry Equipment, installation, capacity analysis, operating cost analysis and project design services, services, consultancy service",
    icon: <FeatureIcon />,
  },
  {
    id: 6,
    text: " Self Service Laundry Equipment, installation, capacity analysis, operating cost analysis and project design services, services, consultancy services",
    icon: <FeatureIcon />,
  },
  {
    id: 7,
    text: "Ship Type laundry equipment supply, installation, consultancy, project and service",
    icon: <FeatureIcon />,
  },
  {
    id: 8,
    text: "Student Dormitories laundry equipment supply, installation, consultancy, project and service",
    icon: <FeatureIcon />,
  },
  {
    id: 9,
    text: "Textile Finishing, washing and finishing equipment supply, installation, consultancy, project and service",
    icon: <FeatureIcon />,
  },
  {
    id: 10,
    text: "İlaç Fabrikaları Çamaşırhane Ekipman tedarik, kurulum, kapasite analizleri, işletme maliyet analizleri ve projelendirme hizmetleri, servis hizmetleri, danışmanlık hizmetleri ",
    icon: <FeatureIcon />,
  },
  {
    id: 11,
    text: "Elbise ve Uniforma Konveyorları üretim, kurulum ve servis hizmetleri",
    icon: <FeatureIcon />,
  },
];

const Fields = () => {
  return (
    <div className="container">
      <div className="fields">
        <h2>Fields of Activity</h2>
        <div className="fields-card">
          {fields.map((item) => (
            <div key={item.id}>
              <div className="fields-card__cards">
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fields;
