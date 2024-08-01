import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import Carrousel from './Carrousel'
function LogementCard() {
    const {id}=useParams();
    const logement=logements.find(logement=>logement.id ===id);
    console.log(logement);
    const picture = logements.map(pictures=>pictures.picture);
    console.log(picture);
    if (!logement) {
        return<div>
            logement non trouvé
                </div>

    }
    return(
        
            
    <Carrousel src={picture} />

        
    )
    
}
export default LogementCard
