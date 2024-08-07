import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";
import staractive from "../assets/staractive.svg";
import starinactive from "../assets/starinactive.svg";
import Collapse from "../components/Collapse";
import "../styles/infoapartment.scss";
import "../styles/descriptionlogement.scss";
import Error404 from "./Error404";
function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404/>;
  }
  const equipments = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));
  const rating = logement.rating;
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
    <div>
      <Header />

      <Carrousel
        id={logement.id}
        pictures={logement.pictures}
        alt={logement.description}
      />
      <section className="infoapartment-container">
        <div className="infoapartment-content">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul className="tag-container">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-container">
          <article>
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </article>
          <div className="star-container">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} filled={i < rating} />
              ))}
          </div>
        </div>
      </section>

      <section className="description-container">
        <Collapse title={"Description"} description={logement.description} />

        <Collapse title={"Equipements"} description={equipments} />
      </section>

      <Footer />
    </div>
  );
}

export default Logement;
