function Host({host}) {
    return(
        <div>
            <img src={host.picture} alt="photo du proprietaire" />
            <p>{host.name}</p>

        </div>
    )
    
}
export default Host