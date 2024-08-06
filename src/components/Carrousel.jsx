import '../styles/carrousel.scss'

import {useState} from 'react'
function Carrousel({pictures, alt,}) {
    const [currentIndex, setCurrentIndex] = useState(0);
     

    function DeleteChevron(pictures) {
        if (pictures === 1) {
            return '';
          }
          return 'fa-solid ';
          
        
    }

    function DeleteNumber(pictures) {
        if (pictures === 1) {
          return '';
          }
          return 'carrousel-figure-number';
        }
    
        

    const getClassname = (index) => {
      if (index === currentIndex) {
        return 'carrousel-figure-active';
      }
      return '';
    }

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

            {pictures.map((image, index) => (
                <img key={index} src={image} alt={alt} className={getClassname(index)}/>
                
            ))}
            <div className={DeleteChevron(pictures.length)}>
            <i className='fa-solid fa-chevron-left ' onClick={goToPrevious}/>
            <i className='fa-solid fa-chevron-right' onClick={goToNext}/>

            </div>

            
            
                
                <span  className={DeleteNumber(pictures.length)}>
                    {currentIndex + 1} / {pictures.length}
                
            </span>
            

                
            </figure>
            
        </div>
    )
    
}
export default Carrousel




