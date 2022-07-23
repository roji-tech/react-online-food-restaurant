import React from "react";
import "../css/stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <div>
        <h3 className="stats-figure">100+</h3>
        <p className="stats-text">happy clients</p>
      </div>
      <div>
        <h3 className="stats-figure">15</h3>
        <p className="stats-text">partners</p>
      </div>
      <div>
        <h3 className="stats-figure">2,279</h3>
        <p className="stats-text">followers</p>
      </div>
    </section>
  );
};

export default Stats;
