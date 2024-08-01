import '../styles/footer.scss'
import DefaultPicture from'../assets/whitelogo.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-container'>
            <Link to='/'>
            <img className='logo-footer' src={DefaultPicture} alt="logo kasa" />

            </Link>
            <p>© 2020 Kasa. All rights reserved</p>

        </div>
    )
    
}

export default Footer 