import React from 'react'
import InnerCard from './InnerCard'
import { Terminal } from 'lucide-react';


const SkillCard = ({data}) => {
  return (
    <div className='card item  '>

        <div className= {`h-[28vw]  w-[60vw] rounded-3xl p-[8%] ${data.bgClass}`} >
            <div className='flex gap-[2%]'>
                <div className='bg-sky-400/20 text-sky-400 rounded-xl p-[0.3vw] ' >{data.logo}</div>
                <h1 className='text-[2vw] font-extrabold mt-[1%] text-white'>{data.title}</h1>
            </div>
            <div className='flex flex-col space-y-[3%] mt-[3%]'>
                <InnerCard tach={data.tech1} percentage={data.percent1} />
                <InnerCard tach={data.tech2} percentage={data.percent2}  />
                <InnerCard tach={data.tech3} percentage={data.percent3} />
                <InnerCard tach={data.tech4} percentage={data.percent4} />

            </div>

        </div>
      
    </div>
  )
}

export default SkillCard
