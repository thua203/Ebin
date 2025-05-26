import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { Star } from 'lucide-react'

export default function Card({title, count, color, dataChart}) {
  return (
    <div className='w-full h-full rounded-2xl flex flex-col !px-3 font-dmsans font-bold'>
        <div className='w-full h-[40%] !border-b !border-b-gray-300 flex justify-between items-center'>
            <div className='flex items-center gap-2 text-iconColor'>
                <Star className='bg-iconBgColor text-iconColor w-[25x] h-[25px] rounded-[50%]'/>
                <span>{title}</span>
            </div>
            <span>{count}</span>
        </div>
        <div className='flex-1 flex items-center'>
            <div className='flex-1 h-full'>
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={dataChart}>
                        <Line
                        type="monotone"
                        dataKey="value" 
                        stroke={color || "#000000"}
                        strokeWidth={3}
                        dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='flex-1 text-right text-iconColor font-normal'>
                <span><span className='text-greenText'>10+</span> more</span> <br/>from last week
            </div>
        </div>
    </div>
  )
}