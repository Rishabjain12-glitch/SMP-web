import { NavLink } from 'react-router-dom'

export default function NavigationMenu() {
  return (
    <nav className="nav-menu">
      <NavLink to="/" end className="site-name">
        TheCarbonCalci
      </NavLink>
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
        Services
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
    </nav>
  )
}