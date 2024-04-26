import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
import { icon } from "@fortawesome/fontawesome-svg-core";
const experience = [
  {
    logo: "./img/btg-logo.png",
    logoClass:"logo-dimension-df",
    company: "Btg Pactual",
    position: "Senior Systems Analyst, Equities & Derivatives",
    date: "April-2022 to April-2024",
    desc: {
      1: "Responsible for B3 files reading system (SMPISO standard)",
      2: "Standardizing solutions with dependency injection",
      3: "Development of solutions and support for business areas",
    },
  },
  {
    logo:"./img/credit-suisse-logo.png",
    logoClass:"logo-dimension-df",
    company: "Credit Suisse (UBS)",
    position: "Systems Analyst, Onshore Investment Funds",
    date: "January-2020 to April-2022",
    desc: {
      1: "Responsible for accounting system migration",
      2: "Support and integration with treasury, compliance and middle teams",
      3: "Maintenance of database systems and solutions",
    },
  },
  {
    logo:"./img/logo-agilus.svg",
    logoClass:"logo-dimension-lg",
    company: "Agilus informática",
    position: "Net and Javascript developer",
    date: "May-2013 to November-2021",
    desc: {
      1: "Creation of solutions for data processing (several sources)",
      2: "Generation of customized reports for clients (dev express)",
      3: "Development of robots to read data on websites that dont have an API",
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, logo, logoClass, date, desc } = experience[value];

  return (
    <section className="experience" id="xp">
      <h2 className="experience-title">
        <Translate>Last Experiences</Translate>
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h4>{company}</h4>
          <p className={logoClass}><img src={logo}/></p>
          <h3><Translate>{position}</Translate></h3>
          <p className="experience-date"><Translate>{date}</Translate></p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p><Translate>{desc[key]}</Translate></p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
