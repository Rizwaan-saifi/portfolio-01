import React from 'react'

const InnerCard = (props) => {
  return (
    <div>

        <div>
            <div className='flex justify-between text-white'>
                <span>{props.tach}</span>
                <span>{props.percentage}</span>
            </div>
            <div className='w-full bg-linear-to-r from-sky-400/15 to-purple-400/15 rounded-full h-[0.4vw]'>
              <div className='bg-linear-to-r from-sky-400 to-purple-400  h-[0.4vw] rounded-full' style={{ width: `${props.percentage}` }}>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default InnerCard
