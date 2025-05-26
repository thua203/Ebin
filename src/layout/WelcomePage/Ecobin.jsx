import img1 from "../../assets/image/image1.png";

export default function Ecobin() {
  return (
    <div
      className="w-full h-[765px] flex flex-col items-center justify-center gap-10"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-[7rem] font-dmsans font-extrabold text-primaryButton">ECOBIN.</span>
      <p className="text-white text-center text-[2.5rem] font-bold">Efficient Solutions for <br/> Sustainable Waste Management</p>
      <div className="bg-primaryText font-dmsans rounded-[10px] cursor-pointer hover:bg-primaryButton-80 w-40 h-[40px] text-white flex items-center justify-center ">Get Started</div>
    </div>
  );
}