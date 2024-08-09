import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/values.scss";
import Collapse from "../components/Collapse";
import { descriptionvalue } from "../datas/DescriptionValues";

//import Values from '../components/Values'
import DefaultPicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../components/Banner";
function About() {
  return (
    <div>
      <Header />
      <Banner image={DefaultPicture} alt="montagnes et rivieres" />
      {descriptionvalue.map(({ title, id, description }) => (
        <div key={id} className="values-container">
          <Collapse title={title} description={description} />
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default About;
