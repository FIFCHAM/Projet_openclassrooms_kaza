import '../styles/index.scss';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import DefaultPicture from '../assets/IMG.png'
function Home() {
    const title = "Chez vous, partout et ailleurs"
    return (
        <div>
            <Header/>
            <Banner image={DefaultPicture} alt="mer et falaises" titre={title}>
            <section className='banner-container'>
                <h1 titre={title}></h1>
                

                <img src={DefaultPicture} alt="mer et falaises" />
                
            </section>
            </Banner>
            <Gallery/>
            <Footer/>
        </div>
    )
    
}

export default Home