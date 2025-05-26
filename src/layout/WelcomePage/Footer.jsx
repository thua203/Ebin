import { Globe, Facebook, Instagram, Youtube} from "lucide-react"

export default function Footer() {

  return (
    <div className="w-full h-[300px] bg-primaryButton flex text-white">
      <div className="flex-1  flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex flex-col justify-between">
          <p className="text-left">At EcoBin, we provide an AI-powered smart waste management solution designed to optimize recycling and sustainability. Our system automatically sorts waste, monitors fill levels, and processes data for efficient waste management. With EcoBin, businesses and public spaces can reduce waste, improve recycling efficiency, and contribute to a greener future.</p>
          <div className="flex w-[32%] justify-between">
            <Globe/>
            <span className="">ecobiword@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex-1  flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex ">
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-[1.5rem] font-bold">Pages</span>
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-[1.5rem] font-bold">Follow Us</span>
            <div className="flex gap-4"> 
                <Facebook />
                <Instagram/>
                <Youtube/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}