import { Pencil, Compass, Trash } from "lucide-react";
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const bins = [
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
  {
    id: "AFB1462",
    location: [10.7769, 106.7009],
    area: "District 1",
    status: "Normal",
    last_emptied: "2025-02-05 10:30:00",
  },
];

export default function BinMap() {
  const {setTitle} = useOutletContext();

  useEffect(() => {
    setTitle("Bins Management")
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
                    <th className="tableHead">Bin ID</th>
                    <th className="tableHead">Location</th>
                    <th className="tableHead">Area</th>
                    <th className="tableHead">Status</th>
                    <th className="tableHead">Last Emptied</th>
                    <th className="tableHead">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bins.map((bin) => (
                      <tr key={bin.id} className="font-light !bg-white text-black">
                          <th className="tableHead text-primaryButton">{bin.id}</th>
                          <th className="tableHead">{bin.location}</th>
                          <th className="tableHead">{bin.area}</th>
                          <th className="tableHead">{bin.status}</th>
                          <th className="tableHead">{bin.last_emptied}</th>
                          <th className="tableHead">
                            <div className="w-full h-full flex justify-center gap-4">
                              <Pencil className="text-greenText"/>
                              <Compass className="text-blue-600"/>
                              <Trash className="text-red-500"/>
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
