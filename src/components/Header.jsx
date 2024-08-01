import DefaultPicture from '../assets/LOGO.png'
import '../styles/header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        
        
        <div>
            <header>
            
            <Link to='/'>
            <img src={DefaultPicture} alt="logo kasa" />
            </Link>
            <nav>
                <ul>
                    <Link to="/">
                    <li>Accueil</li>
                    </Link>
                    <Link to='/about'>
                    <li>A Propos</li>
                    </Link>
                </ul>
                
            </nav>

            </header>

            

        </div>
        
        


    )
    
}

export default Header 