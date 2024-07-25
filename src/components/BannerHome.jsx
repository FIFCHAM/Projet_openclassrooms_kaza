import '../styles/bannerhome.scss'
import DefaultPicture from '../assets/IMG.png'
function BannerHome() {
    return (
        <div>
            <section className='banner-container'>
                <p>Chez vous, partout et ailleurs</p>
                

                <img src={DefaultPicture} alt="mer et falaises" />
                
            </section>
        </div>
    )
    
}

export default BannerHome