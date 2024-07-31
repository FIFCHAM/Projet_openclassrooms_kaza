import '../styles/values.scss'
import { descriptionvalue } from '../datas/DescriptionValues';
import Collapse from './Collapse'


function Values() {
   
        
    
    //const [isOpen,setIsopen]= useState(true)
    return (
        
        <div>

            {descriptionvalue.map(({title,id,description})=>
                
            <div key={id} className="values-container">
                <Collapse title={title} description={description}/>
             
            </div>
           
            
            )}
            </div>
        )
}

export default Values