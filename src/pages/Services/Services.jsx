/*This is the Services Component for PL. it calls all the necessary
Service components to form the Services page for PL Multimedia*/

import React, { useState } from "react";
import { ServiceCard, MoreCard } from "./ServiceCard";
import ServicesCSS from "./services.module.css";
import { DomainSearch } from "./DomainSearch";
import servicesData from "../../data/servicesData";
import { MainHeading } from "../../components/MainHeading/MainHeading";
import { useSpring, animated, easings } from "react-spring";
//import Pagination from "../../components/Pagination/Pagination";
//import useFetch from "../../hooks/useFetch";


export const Services = () => {
  //const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //const [currentPage, setCurrentPage] = useState(1);
  //const data = useFetch(servicesData);


  const style = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 700, easing: easings.easeOutBack },
  });
  return (
    <div className={ServicesCSS["servicePage"]}>
      <MainHeading headingName="Our Services" />
      <animated.div style={style}>
        <DomainSearch />
      </animated.div>

      <div className={ServicesCSS["services-container"]}>
        <div className={ServicesCSS["services-cardSection"]}>
          {servicesData.map((service) => {
            return (
              <ServiceCard
                key={service.id}
                logo={service.logo}
                title={service.title}
                description={service.description}
                serviceDetails={service}
                loadedFrom="service"
              />
            );
          })}

          <MoreCard moreDetails="AND MORE To Come ..." />
        </div>
      </div>
      
    </div>
  );
};
