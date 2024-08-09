import "../styles/banner.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Banner(props) {
  return (
    <div className="banner-container">
      {props.titre && <h1>{props.titre}</h1>}
      <img src={props.image} alt={props.alt} />
    </div>
  );
}

export default Banner;
Banner.propTypes = {
  titre: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};
