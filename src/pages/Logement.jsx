import Footer from "../components/Footer";
import Header from "../components/Header";
//import LogementCard from "../components/Logement-card"
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";
import staractive from  "../assets/staractive.svg";
import starinactive from  "../assets/starinactive.svg";
import Collapse from "../components/Collapse";
import "../styles/infoapartment.scss";
import "../styles/descriptionlogement.scss";
function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <div>logement non trouvé</div>;
  }

  return (
    <div>
      <Header />

      <Carrousel pictures={logement.pictures} alt={logement.description} />
      <section className="infoapartment-container">
        <div className="infoapartment-content">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
              <ul className="tag-container" >
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
        ))}
          </ul>
          </div>
        <div className="host-container">
                
            <article >
                    
                <h2 >{logement.host.name}</h2>
                <img src={logement.host.picture} alt={logement.host.name} />
            </article>
                
                <img rating={logement.rating} src={starinactive} className="starinactive"  />
        </div>
      </section>

      <section className="description-container">
      <Collapse title={"Description"} description={logement.description}/>
      
      <Collapse title={"Equipements"} description={logement.equipments}
      
      />
      
      </section>

      <Footer />
    </div>
  );
}

export default Logement;
