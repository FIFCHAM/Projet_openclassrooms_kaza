import '../styles/carrousel.scss'

import  arrow_back from '../assets/arrow_back.svg'
import  arrow_forward from '../assets/arrow_forward.svg'
import {useState} from 'react'
function Carrousel({pictures, alt}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    return(
        
        <div className="carrousel-container">
            <figure className="carrousel-figure" >

            {pictures.slice().reverse().map((image, index) => (
                <img key={index} src={image} alt={alt} className='img-carrousel'/>
                
            ))}
            <img src={arrow_back} alt="arrow_back"  className="arrow arrow-back"  onClick={goToPrevious}  />

            <img src={arrow_forward} alt="arrow_forward"  className="arrow arrow-forward"  onClick={goToNext}  />
            <span></span>
            </figure>
            
        </div>
    )
    
}
export default Carrousel




