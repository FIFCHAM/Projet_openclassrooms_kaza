import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/collapse.scss";
function Collapse(props) {
  const [isOpen, setIsopen] = useState(true);

  return isOpen ? (
    <div>
      <article onClick={() => setIsopen(false)} className="collapse-container">
        <p>{props.title}</p>
        <i className="fa-solid fa-chevron-up "></i>
      </article>
    </div>
  ) : (
    <div>
      <article onClick={() => setIsopen(true)} className="collapse-container">
        <p>{props.title}</p>
        <i className="fa-solid fa-chevron-up rotate"></i>
      </article>
      <span className="collapse-content">{props.description}</span>
    </div>
  );
}
Collapse.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Collapse;
