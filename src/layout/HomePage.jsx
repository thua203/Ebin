import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header'
import { useState } from 'react'

export default function HomePage() {
  const [title, setTitle] = useState("Home")

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Header  title={title}/>
        <main className="p-4 bg-[#f7f9fc] flex-1 flex overflow-y-auto">
          <Outlet context={{setTitle}} />
        </main>
      </div>
    </div>
  )
}