import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import "../styles/infoapartment.scss";
import "../styles/descriptionlogement.scss";
import Error404 from "./Error404";
function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404 />;
  }
   const equipment=logement.equipments.map((equipment, index) => (
     <li key={index}>{equipment}</li>
    
  ));
  
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
          <Tags tags={logement.tags} />
          
        </div>
        <div className="host-container">
          <article>
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </article>
          
            <Rating rating={logement.rating} />
          
        </div>
      </section>

      <section className="description-container">
        <Collapse title={"Description"} description={logement.description} />

        <Collapse title={"Equipements"} description={equipment} />
      </section>

      <Footer />
    </div>
  );
}

export default Logement;
