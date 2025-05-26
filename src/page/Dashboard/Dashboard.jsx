import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from './CardItem/Card';
import HistoryCard from './CardItem/HistoryCard';

export default function Dashboard() {
  const {setTitle} = useOutletContext();

  useEffect(() => {
    setTitle("Dashboard")
  }, [])

  const data1 = [
  { value: 60 },
  { value: 80 },
  { value: 40 },
  { value: 100 },
  { value: 70 },
  { value: 150 },
  { value: 130 }
  ]

  const data2 = [
  { value: 30 },
  { value: 50 },
  { value: 90 },
  { value: 120 },
  { value: 110 },
  { value: 95 },
  { value: 100 }
  ]

  const data3 = [
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
  { value: 90 },
  { value: 70 }
  ]

  const data4 = [
  { value: 55 },
  { value: 60 },
  { value: 45 },
  { value: 85 },
  { value: 95 },
  { value: 105 },
  { value: 90 }
  ]

 const dataMonthly = [
    { name: "May", value1: 50, value2: 20 },
    { name: "Jun", value1: 120, value2: 100 },
    { name: "Jul", value1: 300, value2: 200 },
    { name: "Aug", value1: 400, value2: 300 },
    { name: "Sep", value1: 220, value2: 180 },
    { name: "Oct", value1: 250, value2: 210 },
    { name: "Nov", value1: 200, value2: 60 },
    { name: "Dec", value1: 180, value2: 50 },
    { name: "Jan", value1: 350, value2: 70 },
    { name: "Feb", value1: 370, value2: 130 },
    { name: "Mar", value1: 300, value2: 200 },
    { name: "Apr", value1: 180, value2: 110 },
  ];

  const dataDaily = Array.from({ length: 14 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value1: Math.floor(Math.random() * 300),
    value2: Math.floor(Math.random() * 200),
  }));

  const dataArea = [
    { name: "North", value1: 120, value2: 100 },
    { name: "South", value1: 200, value2: 150 },
    { name: "East", value1: 180, value2: 160 },
    { name: "West", value1: 240, value2: 220 },
  ];

  return (
    <div className="flex w-full h-full bg-lightGray flex-col">
      <div className='w-full h-[200px] flex justify-center'>
        <div className='w-[80%] h-full flex gap-10 !p-4'>
          <div className='cardDashboardStyle'>
            <Card
              title={"Organic"}
              count={300}
              color={"#31437A"}
              dataChart={data1}
            />
          </div>
          <div className='cardDashboardStyle'>
            <Card
              title={"Inorganic"}
              count={375}
              color={"#1EA7FF"}
              dataChart={data2}
            />
          </div>
          <div className='cardDashboardStyle'>
            <Card
              title={"Recyclable"}
              count={250}
              color={"#FF614C"}
              dataChart={data3}
            />
          </div>
          <div className='cardDashboardStyle'>
            <Card
              title={"Hazadous"}
              count={110}
              color={"#30f455"}
              dataChart={data4}
            />
          </div>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <div className='w-[80%] h-[90%] bg-white rounded-2xl flex justify-center'>
          <HistoryCard
            areaData={dataArea}
            dailyData={dataDaily}
            monthlyData={dataMonthly}
          />
        </div>
      </div>
    </div>
  )
}
