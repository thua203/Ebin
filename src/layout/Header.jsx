import { ChevronDown } from 'lucide-react'

export default function Header({title}) {
  return (
    <header className="flex items-center font-dmsans justify-between !px-6 !py-2 !border !border-gray-300 bg-white">
      <div className='flex-1 flex justify-center'>
        <h1 className="!text-[1.6rem] !font-bold text-primaryButton">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <ChevronDown className="text-gray-500" size={20} />
      </div>
    </header>
  )
}