import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/_404.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <Header />
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">
          <span>Retourner sur la page d&apos;accueil</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
