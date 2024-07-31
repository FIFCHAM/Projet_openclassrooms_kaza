import '../styles/cardrent.scss'
//import { Link } from 'react-router-dom'

function Cardrent ({id,cover,title}) {
    
    return(
        <div className="card-rent" >
        <picture key={id}>
            
                <img src={cover} alt="interieur des logements" />
                <p>
                {title}
                </p>

            </picture>
        </div>
    
)
}
export default Cardrent
//</Link>
//<Link to='logement'>