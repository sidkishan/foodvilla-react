import { useState } from "react";
const Section = ({ name, desc, isVisible, handleClick }) => {
  //const [isVisible, setIsVisible] = useState(true);   lifting the state up
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>{desc}</p>}
    </div>
  );
};
export default Section;
