
import Footer from '../components/Footer'
import Header from '../components/Header'
import Values from '../components/Values'
import DefaultPicture from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Banner from '../components/Banner'
function About() {
    return (
        <div>
            <Header/>
            <Banner image={DefaultPicture} alt="montagnes et rivieres">
            <div className='bannerabout-container'>
            <img src={DefaultPicture} alt="montagnes et rivieres" />

        </div>
            </Banner>
            <Values/>

            <Footer/>

        </div>

    )
    
}

export default About