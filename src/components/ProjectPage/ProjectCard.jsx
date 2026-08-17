import { ExternalLink } from 'lucide-react';
import { FileCodeCorner } from 'lucide-react';
import { CodeXml } from 'lucide-react';



const ProjectCard = (props) => {
  return (
    <div>

        <div className='bg-gray-600/10 border border-sky-700/50 h-[32vw] w-[30vw] flex flex-col rounded-2xl'>
               <div 
                    className='bg-linear-to-r from-sky-400/15 to-purple-400/15
                    hover:bg-linear-to-l hover:from-sky-400/10 hover:to-purple-400/10
                    border-b border-sky-400 w-full h-[40%] rounded-t-2xl text-gray-600
                    flex justify-center items-center'>

                    <CodeXml size={100} />
               </div>

               <div className='flex flex-col text-white '>
                
                    <div className='px-[7%] mt-[6%]'>

                        <h1 className='text-[1.6vw] font-semibold'>{props.h}</h1>

                        <p className='mt-[3%] text-sm'>
                            {props.p}
                        </p>

                        <div className='flex mt-[6%] gap-[2%]'>
                            <span 
                                className='px-[3%] py-[1%] 
                                rounded-lg flex justify-center 
                                items-center text-xs border
                                text-sky-400 bg-sky-400/15'>
                                {props.tech1}
                            </span>

                            <span 
                                className='px-[3%] py-[1%] 
                                rounded-lg flex justify-center 
                                items-center text-xs border
                                text-sky-400 bg-sky-400/15'>
                                {props.tech2}
                            </span>

                            <span 
                                className='px-[3%] py-[1%] 
                                rounded-lg flex justify-center 
                                items-center text-xs border
                                text-sky-400 bg-sky-400/15'>
                                {props.tech3}
                            </span>

                            <span 
                                className='px-[3%] py-[1%] 
                                rounded-lg flex justify-center 
                                items-center text-xs border
                                text-sky-400 bg-sky-400/15'>
                                {props.tech4}
                            </span>

                        </div>
                    </div>
                    
                    <div className='flex gap-[2%] justify-center mt-[6%] '>

                        <button 
                            className='flex justify-center 
                            items-center gap-[6%] px-[4.5vw] 
                            py-[0.3vw] rounded-lg border-gray-400/25 border'>
                            <FileCodeCorner size={20} />
                            Code
                        </button>

                        <button 
                            className='flex justify-center 
                            items-center gap-[6%] px-[4.5vw] 
                            rounded-lg bg-sky-400 
                            text-gray-900 '>
                            <ExternalLink size={20} />
                            Live
                        </button>

                    </div>
               </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
