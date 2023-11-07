import React from "react";
import { serviceData } from "../../data/data";

import { ServicesWrapper } from "./styles/Service.styles";

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <div className="services">
        {serviceData.map(({ id, image, title, description }) => {
          return (
            <div className="service" key={id}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </ServicesWrapper>
  );
};

export default Services;
