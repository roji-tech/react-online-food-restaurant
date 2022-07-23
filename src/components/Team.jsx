import React from "react";
// import memo1 from "../img/memoji1.png";
import memo from "../img/emojisky.com-8041071.png";
import "../css/team.css";

const memberDetails = [
  {
    id: 1,
    image: memo,
    name: "roji tech",
    title: "CEO",
    color: "bisque",
  },
  {
    id: 2,
    image: memo,
    name: "babatunde adeniyi",
    title: "Acountant",
    color: "aquamarine",
  },
  {
    id: 3,
    image: memo,
    name: "tom david",
    title: "public relation officer",
    color: "darksalmon",
  },
  {
    id: 4,
    image: memo,
    name: "becca williams ",
    title: "HR manager",
    color: "lightgreen",
  },
  {
    id: 5,
    image: memo,
    name: "daniel thompson",
    title: "chief security officer",
    color: "slategray",
  },
];

const Member = ({ detail }) => {
  const { name, image, title, color } = detail;
  return (
    <div className="member">
      <div className="img-background" style={{ backgroundColor: color }}>
        <img src={image} alt="" />
      </div>
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
    </div>
  );
};
const Team = () => {
  return (
    <section className="team-section">
      <h2 className="custom-title">
        Our Team <span></span>
      </h2>
      <div className="members">
        {/* <Member />
        <Member />
        <Member />
        <Member /> */}
        {memberDetails.map((item) => {
          return <Member detail={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Team;
