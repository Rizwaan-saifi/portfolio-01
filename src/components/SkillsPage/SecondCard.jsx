import React from 'react'

const SecondCard = (props) => {
  return (
    <div>

        <div 
            className='bg-gray-600/25 
            hover:bg-linear-to-r from-sky-400/15 to-purple-400/15 w-[98%] h-[7vw] 
            rounded-2xl flex flex-col justify-center 
            p-[4%] text-white gap-[4%] '>
            <h1 className='text-lg font-semibold'>{props.h}</h1>
            <p className='text-sm text-gray-400'>{props.p}</p>
        </div>
      
    </div>
  )
}

export default SecondCard
