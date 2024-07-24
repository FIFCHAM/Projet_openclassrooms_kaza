import '../styles/banner.scss'
import DefaultPicture from '../assets/IMG.png'
function Banner() {
    return (
        <div>
            <section>
                <p>Chez vous, partout et ailleurs</p>
                

                <img src={DefaultPicture} alt="mer et falaises" />
                
            </section>
        </div>
    )
    
}

export default Banner