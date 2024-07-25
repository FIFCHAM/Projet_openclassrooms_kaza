import '../styles/cardrent.scss'
import logements from '../datas/logements.json'
import { Link } from 'react-router-dom'

function Cardrent () {
    
    return(
            <Link to='logement'>
        <div className='card-rent'>
        {logements.map(({id,title,cover}) => 
        <picture key={id}>
                <img src={cover} alt="" />
                <p>
                {title}
                </p>
            </picture>
)}
        </div>
            </Link>
    
    )
}
export default Cardrent