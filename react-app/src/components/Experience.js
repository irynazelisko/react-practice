import React, { useState } from "react";
import WorkExperienceDetails from "./WorkExperienceDetails";

export function Experience() {
  const [experience] = useState([
    {
      title: 'Trainee frontend developer',
      name: 'Robot-dreams',
      description: 'actively learning basics of html, css, javascript, react. Getting a lot of knowledge, additional English lessons and many other useful opportunities',
      link: 'https://robotdreams.cc/uk?utm_term=robotdreams&utm_campaign=robot_dreams&utm_source=google&utm_medium=cpc&utm_content=search-eu&gad=1&gclid=Cj0KCQjwu-KiBhCsARIsAPztUF1j8UOAw_pFB43-1MEpCJcKEmXTSjyWcxOv4rkLTcN9wOt5NRZy-UEaAitlEALw_wcB'
    }
  ]);
    return (
      <div className="work">
        <h3 className="central-title central-border" id="sectionC">Work experience</h3>
        <div className="work-descr">
        {experience.map((item, index) => (
          <WorkExperienceDetails
            key={index}
            title={item.title}
            name={item.name}
            description={item.description}
            link={item.link}
          />
          ))};
        </div>
      </div>
    );
  }