// src/components/ServiceSection.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <section className="service-section">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service._id} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.price && (
              <p>
                <strong>Price:</strong> ${service.price}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
