import '../styles/footer.scss'
import DefaultPicture from'../assets/LOGO.png'
function Footer() {
    return (
        <div className='footer-container'>
            <img className='logo-footer' src={DefaultPicture} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>

        </div>
    )
    
}

export default Footer 