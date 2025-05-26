import img1 from "../../assets/image/image3.png";
import overlayImg from "../../assets/image/image2.png";
export default function SmartBin() {

  return (
    <div className="flex justify-center items-center w-full h-[600px] ">
      <div className="flex w-[70%] h-[80%] rounded-[40px] bg-lightGray">
        <div className="flex flex-col w-[70%] h-full rounded-l-[40px] justify-center items-center">
            <div className="w-[90%] h-[90%] font-dmsans flex flex-col gap-5">
                <span className="text-primaryButton text-[2rem] font-bold  ">Smart Waste Bin</span>
                <p className="text-[3rem] font-bold">Revolutionizing the <br/> waste management <br/> system</p>
                <p className="text-primaryButton text-[1.2rem] w-[70%]">Bin-e is an AI-based smart waste bin, designed for public places. it sorts the waste automatically, controls the fill level and processes data for convenient waste management.</p>
            </div>
        </div>
        <div className="flex flex-1 w-[70%] h-full rounded-r-[40px] relative"
            style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
        >
            <img 
                src={overlayImg} 
                alt="OverLay" 
                className="absolute left-[-45%] top-1/2 transform -translate-y-1/2"
            />
        </div>
      </div>
    </div>
  )
}