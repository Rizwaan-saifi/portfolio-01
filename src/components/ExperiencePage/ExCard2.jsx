import React from 'react'

const ExCard2 = (props) => {
  return (
    <div>

        <div className='flex bg-gray-600/30 w-[90%] h-[6vw] rounded-2xl justify-between items-center px-[3%] py-[4%] ml-[3%] text-white'>
            <div className='flex flex-col space-y-[0.1vw]'>
                <h1 className='text-[1.2vw] font-bold'>{props.h}</h1>
                <p className='text-[0.9vw] text-gray-400'>{props.p}</p>
            </div>

            <div>
                <span className='rounded-3xl text-sm border border-gray-600/30 bg-gray-600/30 px-[0.6vw] py-[0.1vw] '>{props.year}</span>
            </div>
        </div>
      
    </div>
  )
}

export default ExCard2
