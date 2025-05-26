import img1 from "../../assets/image/image1.png";
import logo from "../../assets/image/logo.svg";
import {CircleX, Eye, EyeOff} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full h-[70px] flex justify-center items-center font-bold text-primaryButton text-[1.5rem] ">
        <span>Log In</span>
      </div>
      <div className="flex-1 flex justify-center items-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex w-[60%] h-[500px] bg-white rounded-[10px] !border-solid !border-1 !border-black shadow">
          <div className="w-[35%] h-full">
            <div className="flex h-full items-center space-x-3">
              <div className="w-[100%] h-[90%] flex justify-center">
                <img src={logo} alt="Logo" className="w-[90%] object-contain mt-2" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 justify-center items-center font-dmsans text-primaryButton">
              <span className="text-[4.5rem] font-extrabold">ECOBIN.</span>
              <div className="flex flex-col  w-[80%] h-[100px]">
                  <div className="flex w-full h-[50%] justify-between items-center">
                    <label htmlFor="account" className="font-bold">Email</label>
                    <input className="w-[70%] h-[90%] !bg-sideBar !pl-2 !rounded-[5px]" 
                        type="text" 
                        name="account"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex w-full h-[50%] justify-between items-center relative">
                    <label htmlFor="password" className="font-bold">Password</label>
                    <div className="input w-[70%] h-[90%] border">
                      <input
                        className="w-full h-full pr-10 !bg-sideBar !pl-2 !rounded-[5px]"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                      />
                    </div>
                    <div
                      className="absolute right-5 cursor-pointer text-primaryButton"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="bg-primaryText font-dmsans rounded-[5px] cursor-pointer hover:bg-primaryButton-80 w-[100px] h-[40px] text-white flex items-center justify-center rounded"
                    onClick={() => navigate("/home")}
                >
                  Log In
                </div>
                <span className="text-primaryButton font-bold">Or</span>
                <a href="#" className="!text-activeBlue font-bold">Guess</a>
              </div>
          </div>
          <div className="w-[8%] h-full rounded-r-[10px] flex items-center">
              <div className="w-full h-[90%] flex justify-center">
                <CircleX size={35} className="text-primaryButton"
                  onClick={() => navigate("/")}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}