import { useState } from "react";
import "../styles/collapse.scss";
import PropTypes from "prop-types";
function Collapse(props) {
  const [isOpen, setIsopen] = useState(true);

  return isOpen ? (
    <div>
      <article onClick={() => setIsopen(false)} className="collapse-container">
        <p>{props.title}</p>
        <i className="fa-solid fa-chevron-up " />
      </article>
    </div>
  ) : (
    <div>
      <article onClick={() => setIsopen(true)} className="collapse-container">
        <p>{props.title}</p>
        <i className="fa-solid fa-chevron-up rotate" />
      </article>
      <span className="collapse-content">{props.description}</span>
    </div>
  );
}
export default Collapse;

Collapse.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
