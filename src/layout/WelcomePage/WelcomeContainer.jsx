import { Outlet } from 'react-router-dom'

export default function WelcomeContainer() {
  return (
    <div className="min-w-ful">
        <Outlet/>
    </div>
  )
}