import '../styles/index.scss';
import Header from '../components/Header';
import BannerHome from '../components/BannerHome';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
            <Header/>
            <BannerHome/>
            <Gallery/>
            <Footer/>
        </div>
    )
    
}

export default Home