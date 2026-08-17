import React from 'react'

const ExCard1 = (props) => {
  return (
    <div>

        <div className='flex justify-center items-center gap-[2%]'>

            <div className='h-[2.5vw] w-[2.5vw] rounded-full flex justify-center items-center bg-gray-600/30'>
                <div className='h-[0.5vw] w-[0.5vw] rounded-full bg-sky-400 '>
                        
                </div>
            </div>

            <div className='bg-gray-600/30 rounded-xl border border-gray-600/30 px-[3%] py-[3%] h-[9vw] w-[40vw]'>
                <h1 className='text-sky-400 text-xs font-semibold'>{props.time}</h1>
                <h1 className='text-white text-[1.1vw] font-bold mt-[1%]'>{props.h}</h1>
                <p className=' text-sm mt-[1%] text-gray-400'>{props.p}</p>
            </div>
        </div>
      
    </div>
  )
}

export default ExCard1
