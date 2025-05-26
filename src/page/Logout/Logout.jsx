import { useNavigate } from "react-router-dom"

export default function Logout(){
    const navigate = useNavigate()

    return (
        <div className="w-full h-full font-dmsans flex">
            <div className="w-[400px] h-[200px] !border-2 text-primaryButton rounded-[10px] !border-gray-400 shadow !m-auto flex flex-col justify-center gap-10">
                <span className=" text-center font-bold text-[1.4rem]"> Do you want to log out ?</span>
                <div className="flex gap-10 justify-center ">
                    <div className="bg-lightGray font-dmsans rounded-[10px] cursor-pointer hover:bg-grayFilter w-30 h-[40px]  flex items-center justify-center"
                        onClick={() => navigate("/")}
                    >
                        Yes
                    </div>
                    <div className="bg-lightGray font-dmsans rounded-[10px] cursor-pointer hover:bg-grayFilter w-30 h-[40px] flex items-center justify-center"
                        onClick={() => navigate(-1)}
                    >
                        No
                    </div>
                </div>
            </div>
        </div>
    )
}