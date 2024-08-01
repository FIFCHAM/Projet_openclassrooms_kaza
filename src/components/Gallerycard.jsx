import '../styles/gallerycard.scss'
//import { Link } from 'react-router-dom'

function Gallerycard (props) {
    
    return(
        <div className="card-rent" >
        <picture key={props.id}>
            
                <img src={props.cover} alt="interieur des logements" />
                <p>
                {props.title}
                </p>

            </picture>
        </div>
    
)
}
export default Gallerycard
//</Link>
//<Link to='logement'>