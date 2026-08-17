import React from 'react'
import { Brain } from 'lucide-react';
import about1 from '../assets/about1.jpeg'
import about2 from '../assets/about2.jpeg'
import profile2 from '../assets/profile2.png'
import gsap from "gsap"
import {motion} from "framer-motion"
import { useEffect } from 'react'


const AboutPage = () => {

    gsap.to(".svg", {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
      
    })

    useEffect(()=>{
        const all = gsap.utils.toArray(".about");
    
        all.forEach((el)=>{
         gsap.from(el, {
            y:-70,
            opacity:0,
            duration:3,
            stagger:0.2,
            ease:"power3.out",
            scrollTrigger:{
                trigger: el,
                start:"top 80%",
                toggleActions: "restart none none none"
            }
            })
        })
        
      })

      useEffect(()=>{
        const all = gsap.utils.toArray(".aboutRight");
    
        all.forEach((el)=>{
         gsap.from(el, {
            y:70,
            opacity:0,
            duration:3,
            stagger:0.2,
            ease:"power3.out",
            scrollTrigger:{
                trigger: el,
                start:"top 80%",
                toggleActions: "restart none none none"
            }
            })
        })
        
      })


  return (
    <div className=' bg-linear-to-t from-purple-800 to-black  relative h-screen  '>

        <div 
            className='relative z-10 h-full flex flex-col sm:grid-cols-[55%_45%] lg:grid-cols-2 sm:grid pt-[7%]'>

            {/* ----------------------------------1-------------------------------------------------------- */}

            <div className='sm:grid-cols-1 text-white'>

                {/* --------------------------------1.1-------------------------------------------------- */}

                <div>
                    <div 
                         className='about flex justify-center intems-center gap-[2%]'
                        >
                
                        <span 
                                className='text-sky-400 font-extrabold pt-[1.9%]
                               sm:text-[5vw] ssssm:text-[5vw]
                               md:text-[5.5vw] mmd:text-[5vw] mmmd:text-[4.3vw] mmmmd:text-[4vw]
                               lg:text-[4.5vw] llg:text-[4vw] lllg:text-[3.5vw] llllg:text-[3vw]
                               xl:text-[2vw] '
                            >
                            01.
                        </span>

                        <h1 
                               className='font-extrabold
                               sm:text-[6vw] ssssm:text-[6vw]
                               md:text-[6vw] mmd:text-[5.5vw] mmmd:text-[4.8vw]
                               lg:text-[4.7vw] llg:text-[4.6vw] lllg:text-[4vw] llllg:text-[4vw]
                               xl:text-[3.5vw]'
                            >
                            About Me
                        </h1>

                    </div>
                     
                    <div 
                            className='font-light text-gray-300
                            pl-[29%] mt-[4%] pr-[8%]
                            sm:text-[2.5vw] ssm:text-[2.25vw] sssm:text-[2.15vw] ssssm:text-[2.1vw]
                            md:text-[2vw] mmd:text-[1.9vw] mmmd:text-[1.8vw] 
                            lg:text-[1.6vw] llg:text-[1.6vw] lllg:text-[1.5vw] llllg:text-[1.4vw]  
                            xl:text-[1.3vw] '
                        >
                        <p
                            className='about mb-[6%]'
                         >
                            I am a developer who refuses to choose between creativity and logic. 
                            My journey started in the browser, manipulating the DOM and crafting 
                            pixel-perfect interfaces.
                        </p>

                        <p className='about'>
                            But the interface is just the surface. My curiosity drove me deeper — into
                            the data that powers applications, the algorithms that make sense of it, and
                            the AI models that can predict the future.
                        </p>

                    </div>
                </div>

                {/* ----------------------------------1.2---------------------------------------------------------- */}

                <div 
                        className='about p-[4%] mt-[5%] ml-[29%] 
                        mr-[8%] bg-gray-500/20 rounded-xl hover:bg-linear-to-r
                        from-sky-400/15 to-purple-400/15'
                    >

                    <div 
                           className='flex
                           sm:gap-[6%]
                           md:gap-[5%] mmd:gap-[4%] mmmd:gap-[3%] mmmmd:gap-[4%]
                           lg:gap-[4%] llg:gap-[4%] lllg:gap-[2%] llllg:gap-[3%]
                           xl:gap-[1%]'
                        >
                            
                        <Brain 
                            className='text-sky-400' 
                        />

                        <h1
                             className='font-extrabold 
                             sm:text-[2.8vw] ssm:text-[2.6vw]
                             md:text-[2.5vw] mmd:text-[2.3vw] mmmd:text-[2.1vw] mmmmd:text-[2vw]
                             lg:text-[1.9vw] llg:text-[1.8vw] lllg:text-[1.6vw] llllg:text-[1.5vw]
                             xl:text-[1.2vw]'
                            >
                            What Drives Me
                        </h1>
                    </div>

                    <p
                            className='mt-[2%] font-light  text-gray-300

                            md:text-[2vw] mmd:text-[1.8vw] mmmd:text-[1.7vw] mmmmd:text-[1.6vw]
                            lg:text-[1.5vw] llg:text-[1.4vw] lllg:text-[1.3vw] llllg:text-[1.25vw]
                            xl:text-[1.1vw]'
                        >
                        Building intelligent systems that don't just compute data, but 
                        present it through beautiful, intuitive, and human-centric experiences.
                    </p>

                </div>
            </div>

            {/* ---------------------------------------------2------------------------------------------------- */}

            <div 
                 className='aboutRight sm:grid-cols-2 flex items-center'
                >
                <div 
                     className='border border-gray-400/20 bg-gray-500/20
                     sm:h-[60%] sm:w-[90%]  
                     md:h-[50%] md:w-[90%]
                     lg:h-[70%] lg:w-[60%] 
                     p-[1%] rounded-xl '
                    >
                    <div 
                         className='h-full w-full bg-linear-to-r 
                         from-sky-400/15 to-purple-400/15 rounded-xl group relative '
                        >
                        <img 
                            src={about2} alt="about" 
                            className='h-full w-full rounded-xl absolute inset-0  
                            object-cover group-hover:hidden' 
                        />
                        <img 
                         src={about1} alt="hover" 
                         className=" rounded-xl absolute inset-0 
                         w-full h-full object-cover hidden group-hover:block" 
                        />

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default AboutPage
