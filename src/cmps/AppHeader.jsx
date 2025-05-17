
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/user/user.actions.js';

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    function isUser() {
        return user && user.fullname && user.fullname !== ''
    }
    async function _logout() {
        try {
            await logout()
        } catch (err) {
            throw err
        }
    }
    const navigate = useNavigate()
    console.log(isUser());
    return (
        <section className='app-header flex'>
            <div className='logo'>
                <span className='blue'>T </span>
                o y - M a r k e t
            </div>
            <div className='links-header flex'>
                <NavLink to="/">{('Home')}</NavLink>
                <NavLink to="/about">{('AboutUs')}</NavLink>
                <NavLink to="/toy">{('Toys')}</NavLink>
                <NavLink to="/dashboard">{('Dashboard')}</NavLink>
                {
                    isUser() ?
                        <div className="user-info flex">
                            <span className="user-info-name">Hello {user.fullname}</span>
                            <button onClick={_logout} className='user-btn'>Logout</button>
                        </div> :
                        <button onClick={() => navigate('/login')} className='user-btn'>Sign in</button>
                }
            </div>
        </section>
    )
}