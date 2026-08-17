import React, { useEffect } from 'react'
import Ball from '../assets/Ball.png'
import gsap from "gsap"
import react from '../assets/react.png'


const Navbar = () => {


    useEffect(() => {
        
        gsap.to("#ball", {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear"
    });
    },[])

  return (
    <div>

        <header className=' backdrop-blur-2xl '>

            <div 
                className='fixed top-0 left-0 w-full 
                backdrop-blur-md bg-gray-700/13  
                flex px-[6.7%] py-[1%] items-center z-50'>

                <a href="">
                    <span 
                        className='text-2xl font-mono 
                        font-extrabold text-transparent 
                        bg-clip-text bg-linear-to-r 
                        from-sky-400 to-purple-400'>
                        Dev.AI
                    </span>
                </a>
                <div className='ml-[1%] '>
                    <img src={react} alt="ai" id='ball' className='h-fit w-[2.5vw] pl-[2%]' />

                </div>
                <nav className='pl-[44%] space-x-8  flex  text-sm font-semibold text-white '>

                    <div className='space-x-8 mt-2'>
                        
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                        <a href="#devloper">Developer</a>
                    </div>
                    <button className=' text-sky-400 px-[2%] py-[1%] rounded-lg border-sky-400 border'>Resume</button>

                </nav>

                <button></button>

            </div>

        </header>

    </div>
  )
}

export default Navbar
