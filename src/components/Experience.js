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
    position: "Senior systems analyst",
    date: "April 2022 - April 2024",
    desc: {
      1: "bla bla bla experienced",
      2: "bla bla bla experienced",
      3: "bla bla bla experienced",
    },
  },
  {
    logo:"./img/credit-suisse-logo.png",
    logoClass:"logo-dimension-df",
    company: "Credit Suisse",
    position: "Pleno systems analyst",
    date: "January 2020 - April 2022 ",
    desc: {
      1: "bla bla bla experienced",
      2: "bla bla bla experienced",
      3: "bla bla bla experienced",
    },
  },
  {
    logo:"./img/logo-agilus.svg",
    logoClass:"logo-dimension-lg",
    company: "Agilus informática",
    position: "Pleno systems analyst",
    date: "May 2013 - November 2021",
    desc: {
      1: "bla bla bla experienced",
      2: "bla bla bla experienced",
      3: "bla bla bla experienced",
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
          <p class={logoClass}><img src={logo}/></p>
          <h3>{position}</h3>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
