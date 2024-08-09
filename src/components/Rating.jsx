import staractive from "../assets/staractive.svg";
import starinactive from "../assets/starinactive.svg";
import PropTypes from "prop-types";
function Rating(props) {
  // eslint-disable-next-line react/prop-types
  const Star = ({ filled }) => (
    <div>
      {filled ? (
        <img src={staractive} className="star" />
      ) : (
        <img src={starinactive} className="star" />
      )}
    </div>
  );
  return (
    <div className="star-container">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star key={i} filled={i < props.rating} />
        ))}
    </div>
  );
}

export default Rating;
Rating.propTypes = {
  rating: PropTypes.string,
};
