
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className="custom-slideInUp sticky top-0 bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Trapper's Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-gray-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-gray-300'
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-gray-300'
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}