import '../styles/index.scss';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import DefaultPicture from '../assets/IMG.png'
function Home() {
    return (
        <div>
            <Header/>
            <Banner>
            <section className='banner-container'>
                <p>Chez vous, partout et ailleurs</p>
                

                <img src={DefaultPicture} alt="mer et falaises" />
                
            </section>
            </Banner>
            <Gallery/>
            <Footer/>
        </div>
    )
    
}

export default Home