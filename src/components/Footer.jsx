import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div>

        <div className='bg-linear-to-r from-green-400/70 to-red-400 flex justify-between p-[2%]'>
            <a href="">
                    <span 
                        className='text-2xl font-mono 
                        font-extrabold text-transparent 
                        bg-clip-text bg-linear-to-r 
                        from-sky-400 to-purple-400'>
                        Dev.AI
                    </span>
                </a>
                <h1 className="text-[1.5vw] font-extrabold text-purple-700">Let's work together</h1>
                <div className='flex text-white space-x-[1.5vw] text-2xl'>

                    <a href=""><FaGithub/></a>
                    <a href=""><LuLinkedin/></a>
                    <a href=""><BsTwitterX/></a>
                    
                </div>
        </div>
    </div>
  )
}

export default Footer
