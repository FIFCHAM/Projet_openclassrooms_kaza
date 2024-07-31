import '../styles/carrousel.scss'
function Carrousel(pictures) {
    return(
        <div>

        <div className="carrousel-container">
            <img src={pictures} alt="interieur de l'appartement" />
        </div>
        </div>
    )
    
}
export default Carrousel




