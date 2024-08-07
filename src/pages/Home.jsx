import "../styles/index.scss";
import "../styles/gallery.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
//import Gallery from '../components/Gallery';
import Footer from "../components/Footer";
import DefaultPicture from "../assets/IMG.png";
import Gallerycard from "../components/Gallerycard";
import logements from "../datas/logements.json";
import { Link } from "react-router-dom";
function Home() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <div>
      <Header />
      <Banner image={DefaultPicture} alt="mer et falaises" titre={title}>
        <section className="banner-container">
          <h1 titre={title}></h1>

          <img src={DefaultPicture} alt="mer et falaises" />
        </section>
      </Banner>
      <div className="gallery-container">
        {logements.map(({ id, cover, title }) => (
          <figure key={id}>
            <Link to={`/logement/${id}         `}>
              <Gallerycard id={id} title={title} cover={cover} />
            </Link>
          </figure>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
/*<Gallery/>*/
