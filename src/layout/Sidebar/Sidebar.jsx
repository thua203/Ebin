import { NavLink } from 'react-router-dom'
import {
  LayoutGrid,
  Trash,
  Map,
  Users,
  Truck,
  LogOut,
  CircleUser
} from 'lucide-react'
import logo from "../../assets/image/logo.svg"


const menuItems = [
  { path: '/home/dashboard', icon: <LayoutGrid size={20} />, tooltip: 'Dashboard' },
  { path: '/home/bin', icon: <Trash size={20} />, tooltip: 'Bin' },
  { path: '/home/map-bin', icon: <Map size={20} />, tooltip: 'Bins Map' },
  { path: '/home/user', icon: <Users size={20} />, tooltip: 'Users' },
  { path: '/home/route-truck', icon: <Truck size={20} />, tooltip: 'Route' },
  { path: '/home/account', icon: <CircleUser size={20} />, tooltip: 'Account' },
  { path: '/home/logout', icon: <LogOut size={20} />, tooltip: 'Logout' },
]

export default function Sidebar() {
  return (
    <aside className="w-[70px] bg-sideBar !border-r !border-gray-300 flex flex-col items-center py-4 space-y-4">
      <div className="text-[0.8rem] text-primaryButton font-bold !mb-16 flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain !mt-4" />
          <span>ECOBIN.</span>
      </div>
      {menuItems.map(({ path, icon, tooltip }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `group relative !p-3 !my-2 rounded-xl flex items-center justify-center transition-colors 
            ${isActive ? 'bg-primaryButton !text-white' : 'text-iconColor hover:bg-primaryButton-80 hover:text-white'}`
          }
        >
          {icon}
          <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-primaryButton text-white text-xs rounded !px-2 !py-1 transition whitespace-nowrap">
            {tooltip}
          </span>
        </NavLink>
      ))}
    </aside>
  )
}