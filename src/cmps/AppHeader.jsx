
import { NavLink } from 'react-router-dom'

export function AppHeader(){
    return(
        <section className='app-header flex'>
            <div className='logo'>
              <span className='blue'>T </span>  
                 o y - M a r k e t
            </div>
            <div className='links-header'>
            <NavLink to="/">{('Home')}</NavLink>
            <NavLink to="/about">{('AboutUs')}</NavLink>
            <NavLink to="/toy">{('Toys')}</NavLink>
            <NavLink to="/dashboard">{('Dashboard')}</NavLink>
            </div>
            <div >
                <button className='user-btn'>Sign in</button>
            </div>
        </section>
    )
}