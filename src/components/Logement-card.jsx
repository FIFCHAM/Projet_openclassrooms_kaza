import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import Carrousel from './Carrousel'
//import Host from './Host'
//import Tags from './Tags'
/*import Host from './Host'
import Rate from './Rate'
import Title from './Title'*/
console.log(logements);
function LogementCard() {
    const {id}=useParams();
    const logement=logements.find(logement=>logement.id ===id);
    console.log(logement);
    const picture = logement.pictures.map(picture=>picture);
    console.log(picture);
    if (!logement) {
        return<div>
            logement non trouvé
                </div>

    }
    return(
        <div>
    <Carrousel/>
        </div>
    )

}
export default LogementCard
//<Title title={title} location={location}/>
//<Host host={host}/>
//<Rate rating={rating}/>
//<Tags tags={tags}/>

/*{logements.map(({id,pictures,host,tags})=>
    <div key={id}>

        <Carrousel picture={pictures}/>
        <Host host={host}/>
        <Tags tags={tags}/>

        </div>
    )
}*/