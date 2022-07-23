import React from "react";
import Button from "./Button";
import Stats from "./Stats";
import Team from "./Team";

import "../css/about.css";
import meal5 from "../img/meal-5.jpg";

const About = () => {
  return (
    <section className="product-section">
      <h2 className="custom-title product-title">
        What we do <span></span>
      </h2>
      <div className="row">
        <div className="col-2">
          <h3>We're committed to providing the best customer service</h3>
          <p className="about-motive">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            molestias delectus laudantium asperiores quas enim nihil sed
            deserunt, fugiat minima incidunt, ea commodi. Necessitatibus
            veritatis adipisci sit soluta, voluptas laudantium. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Delectus, maiores
            architecto? Corporis, quisquam! Pariatur id ipsum rem saepe alias
            obcaecati. Itaque mollitia repellat necessitatibus ipsam perferendis
            consectetur obcaecati quam dolore.
          </p>
          <Button text={"Explore"} />
        </div>
        <div className="col-2">
          <img src={meal5} alt="" />
        </div>
      </div>
      <Stats />
      <Team />
    </section>
  );
};

export default About;
