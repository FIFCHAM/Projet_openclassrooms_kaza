import '../styles/carrousel.scss'
function Carrousel(props) {
    
    return(
        <div>

        <div className="carrousel-container">
            <img src={props.picture} alt="interieur de l'appartement" />
        </div>
        </div>
    )
    
}
export default Carrousel




