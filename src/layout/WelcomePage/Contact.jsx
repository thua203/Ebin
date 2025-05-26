export default function Contact() {

  return (
    <div className="w-full bg-lightGray h-[460px] flex justify-center font-dmsans">
      <div className="w-[90%] h-full flex flex-col">
        <span className="text-primaryButton text-[2.5rem] font-extrabold ">Contact Us</span>
        <div className=" flex-1 flex justify-center items-center">
            <div className="w-[80%] h-[90%]  flex flex-col">
                <div className="flex-1 flex">
                    <div className="flex-1  flex flex-col justify-between">
                        <div className="flex flex-col flex-1">
                            <span className="text-[1.2rem] ">Full Name*</span>
                            <input
                                type="text"
                                className="w-[80%] h-[40px] !border !bg-white !border-black !pl-2 !rounded-[5px] "
                                placeholder="Enter your Full Name"
                            />
                        </div>
                        <div className="flex flex-col flex-1 ">
                            <span className="text-[1.2rem]">Email*</span>
                            <input type="text" className="w-[80%] h-[40px] !bg-white !border !border-black !pl-2 !rounded-[5px]"
                            placeholder="Enter your Email"
                            /> 
                        </div>
                        <div className="flex flex-col flex-1 ">
                            <span className="text-[1.2rem]">Address</span>
                            <input type="text" className="w-[80%] h-[40px] !bg-white !border !border-black !pl-2 !rounded-[5px]"
                            placeholder="Enter your Address"
                            /> 
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <span className="text-[1.2rem]">Message*</span>
                        <input type="text" className="w-[100%] h-[80%] !border !bg-white !border-black !pl-2 !rounded-[5px]" placeholder="Enter your Message"/>
                    </div>
                </div>
                <div className="h-[60px] w-full flex justify-end items-center font-dmsans">
                    <div className="bg-primaryText font-dmsans rounded-[10px] cursor-pointer hover:bg-primaryButton-80 w-20 h-[70%] text-white flex items-center justify-center rounded">
                        Send
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}