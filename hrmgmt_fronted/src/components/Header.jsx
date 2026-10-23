import './Header.css'
import{Link} from 'react-router-dom'
function Header() {
    return (
        <div>
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/services'>Services</Link>
            <Link to='/login'>Login</Link>
            <Link to="/register">Register</Link>
        </div>
        </div>
    )
}

export default Header