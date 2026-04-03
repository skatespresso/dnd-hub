import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : ''}>
          Project Idea
        </NavLink>
        <NavLink to="/businessplan" className={({ isActive }) => isActive ? 'underline' : ''}>
          Business Plan
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}