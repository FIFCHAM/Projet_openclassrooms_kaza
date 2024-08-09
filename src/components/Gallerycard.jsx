import "../styles/gallerycard.scss";
import PropTypes from "prop-types";

function Gallerycard(props) {
  return (
    <div className="card-rent">
      <picture key={props.id}>
        <img src={props.cover} alt={props.title} />
        <p>{props.title}</p>
      </picture>
    </div>
  );
}
export default Gallerycard;
Gallerycard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};
