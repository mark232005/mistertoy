
import { NavLink } from 'react-router-dom'

export function AppHeader(){
    return(
        <section className='app-header flex'>
            <NavLink to="/">{('Home')}</NavLink>
            <NavLink to="/about">{('AboutUs')}</NavLink>
            <NavLink to="/toy">{('Toys')}</NavLink>
        </section>
    )
}