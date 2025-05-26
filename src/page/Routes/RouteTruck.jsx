import { Bus, Pencil, Trash } from "lucide-react";
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'



const routestruck = [
  {
    id: "collector",
    name: "Lê Xuân Trung",
    phone: "0878888888",
    area: "Quater 1",
  }
];

export default function Users() {
  const {setTitle} = useOutletContext();

  useEffect(() => {
    setTitle("Route")
  }, [])


  return (
    <div className="w-full h-full bg-lightGray flex justify-center font-dmsans items-center">
      <div className="w-[90%] h-[90%]  flex flex-col gap-6">
        <div className="w-full h-[70px] bg-grayFilter flex justify-around  font-bold items-center !rounded-[10px]">
            <input 
              type="text"
              className="!rounded-[5px] !pl-3 h-[60%] w-[20%] !bg-white outline-none"
              placeholder="Search"
            />
            <div className="h-[60%] !rounded-[5px] w-[20%] bg-white !pl-3 flex items-center  text-primaryButton">
              Sort
            </div>
            <div className="h-[60%] !rounded-[5px] w-[20%] bg-white !pl-3 flex items-center  text-primaryButton">
              Filter
            </div>
            <div className="h-[60%] !rounded-[5px] w-[7%] text-primaryButton bg-white flex items-center justify-center text-gray-400">+ Add</div>
        </div>
        <div className="h-[500px] bg-amber-100 !rounded-[10px]">
            <div className="h-full w-full overflow-y-scroll  bg-white shadow !rounded-[10px]">
              <table className="min-w-full text-left !rounded-t-[10px]">
                <thead className="bg-indigo-50 font-semibold text-primaryButton sticky top-0">
                  <tr>
                    <th className="tableHead">Collector</th>
                    <th className="tableHead">Name</th>
                    <th className="tableHead">Phone Number</th>
                    <th className="tableHead">Assigned Area</th>
                    <th className="tableHead">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    routestruck.map((routetruck) => (
                      <tr key={routetruck.id} className="font-light !bg-white text-black">
                          <th className="tableHead text-primaryButton">{routetruck.id}</th>
                          <th className="tableHead">{routetruck.name}</th>
                          <th className="tableHead">{routetruck.phone}</th>
                          <th className="tableHead">{routetruck.area}</th>
                          <th className="tableHead">
                            <div className="w-full h-full flex justify-center gap-4">
                              <Bus/>
                            </div>
                          </th>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
}
