import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import { SquarePen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import background from "../../assets/image/background.png"
import gautruc from "../../assets/image/gautruc.png"

export default function Account() {
  const {setTitle} = useOutletContext();

  useEffect(() => {
    setTitle("Account")
  }, [])

  return (
    <div className="w-full h-full flex flex-col">
      <div 
          className="w-full h-[260px] flex flex-col items-center justify-center relative"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
      >
        <div className='w-[400px] h-[130px]  font-dmsans absolute bottom-[-60px] left-[100px] flex'>
            <img src={gautruc} alt="Gau Truc" className='rounded-[50%] !border-4 !border-white'/>
            <div className='flex gap-3 h-full flex-1 justify-start items-end'>
              <span className='font-bold text-[2.4rem] text-primaryButton'>Admin</span>
              <SquarePen className='!mb-3 cursor-pointer'/>
            </div>
        </div>
      </div>
      <div className='flex-1 bg-lightGray flex justify-center'>
        <div className='w-[80%] h-full flex flex-col'>
          <div className=' flex-1 flex font-dmsans text-primaryButton '>
            <div className='w-[50%]  flex flex-col justify-center !px-20 !pt-20'>
                <div className="flex h-[80px] justify-between">
                  <span className="text-[1.2rem] ">Full Name*</span>
                  <input
                    type="text"
                    className="w-[60%] h-[40px]  !bg-white  !pl-2 !rounded-[5px] "             
                  />
                </div>
                <div className="flex justify-between h-[80px] ">
                  <span className="text-[1.2rem]">Phone Number*</span>
                  <input type="text" className="w-[60%] h-[40px] !bg-white !pl-2 !rounded-[5px]"       /> 
                </div>
                <div className="flex justify-between h-[80px] ">
                  <span className="text-[1.2rem]">Address</span>
                  <input type="text" className="w-[60%] h-[40px] !bg-white !pl-2 !rounded-[5px]"/> 
                </div>
            </div>
            <div className='w-[50%] flex flex-col justify-center !px-20 !pt-20'>
                <div className="flex h-[80px] justify-between">
                  <span className="text-[1.2rem] ">Role*</span>
                  <input
                    type="text"
                    className="w-[60%] h-[40px]  !bg-white  !pl-2 !rounded-[5px] "             
                  />
                </div>
                <div className="flex justify-between h-[80px] ">
                  <span className="text-[1.2rem]">Email*</span>
                  <input type="text" className="w-[60%] h-[40px] !bg-white !pl-2 !rounded-[5px]"       /> 
                </div>
                <div className="flex justify-between h-[80px] ">
                  <span className="text-[1.2rem]">Assign Area</span>
                  <input type="text" className="w-[60%] h-[40px] !bg-white !pl-2 !rounded-[5px]"/> 
                </div>
            </div>
          </div>
          <div className=' h-[80px] flex justify-end items-center gap-10 !pr-18'>
            <div className="bg-primaryText font-dmsans rounded-[10px] cursor-pointer hover:bg-primaryButton-80 w-40 h-[40px] text-white flex items-center justify-center">Cancel</div>
            <div className="bg-primaryText font-dmsans rounded-[10px] cursor-pointer hover:bg-primaryButton-80 w-40 h-[40px] text-white flex items-center justify-center">Confirm</div>
          </div>
        </div>
      </div>
    </div>
  )
}
