import Gallerycard from '../components/Gallerycard'
import '../styles/gallery.scss'
import logements from '../datas/logements.json'
import { Link } from 'react-router-dom'

//import '../styles/cardrent.scss'
function Gallery() {
    return (
        <div className='gallery-container'>
           
            {logements.map(({id,cover,title})=>
            <figure  key={id}>
                <Link to={`/logement/${id}         `}>
            <Gallerycard id={id} title={title} cover={cover}/>

            </Link>
            </figure>
            
            


        )}
</div>
    )
    
}
export default Gallery