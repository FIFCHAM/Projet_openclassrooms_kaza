import '../styles/cardrent.scss'
import '../datas/logements.json'
import logements from '../datas/logements.json'
//const locations= logements
console.log(logements);


function Cardrent () {
    
    



    return(
        <div>
            <figure>
                <img src="" alt="" />
                <p>{logements.map(({title}) => title
    
    
                )}</p>
            </figure>

        </div>
    )
    
}
export default Cardrent