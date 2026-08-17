import React from 'react'
import SkillCard from '../components/SkillsPage/SkillCard'
import { Terminal } from 'lucide-react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useState} from 'react'
import Flip from "gsap/Flip";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);


const Card_Data = [
  {
    id: 1,
    logo: <Terminal size={50}/>, 
    title: "Frontend", 
    tech1: "React",tech2: 'JavaScript',tech3: 'Tailwind CSS', tech4: 'Next.js/Vite', 
    percent1: '90%', percent2: '80%', percent3: '90%', percent4: '70%',
    bgClass: "bg-linear-to-r from-purple-600 to-black",

  },
  {
    id: 2,
    logo: <Terminal size={50}/>, 
    title: "Backend", 
    tech1: "FastAPI",tech2: 'Python',tech3: 'Node.js', tech4: 'Next.js/Vite', 
    percent1: '60%', percent2: '90%', percent3: '50%', percent4: '80%',
    bgClass: "bg-linear-to-r from-black to-rose-600",

  },
  {
    id: 3,
    logo: <Terminal size={50}/>, 
    title: "Data Science", 
    tech1: "React",tech2: 'JavaScript',tech3: 'Tailwind CSS', tech4: 'Next.js/Vite', 
    percent1: '80%', percent2: '70%', percent3: '90%', percent4: '80%',
    bgClass: "bg-linear-to-r from-violet-600 to-black",

  },
  {
    id: 4,
    logo: <Terminal size={50}/>, 
    title: "Data Analyst", 
    tech1: "React",tech2: 'JavaScript',tech3: 'Tailwind CSS', tech4: 'Next.js/Vite', 
    percent1: '80%', percent2: '50%', percent3: '60%', percent4: '90%',
    bgClass: "bg-linear-to-r from-black to-green-600",

  },
]
// kbsfiehfiei

const SkillsPage = () => {
  const [cards, setCards] = useState(Card_Data);

  const skillref = useRef(null);
  
      useEffect(()=>{
          gsap.utils.toArray(".skillCard").forEach((card) => {
              gsap.to(card, {
                  scale: 0.8,
                  x:-300,
                  opacity:0,
                  scrollTrigger: {
                      trigger: card,
                      start: "top 0%",
                      end: "bottom 20%",
                      scrub: true,
  
                      scroller: skillref.current
                  },
                
              })
      })})

  // const handleClick = () => {

    
  //   const state = Flip.getState(".item");
  //   setCards((prev) => {
  //     const arr = [...prev];
  //     const last = arr.pop(); // last card
  //     return [last, ...arr]; // first pe la diya
  //   });

  //   Flip.from(state, {
  //     duration: 0.6,
  //     ease: "power2.inOut",
  //     absolute: true,
  //     stagger: 0.05
  //   });
  // };
  

  return (
   
    <section  
      // onClick={handleClick} 
      className= 'slider border border-sky-400 bg-linear-to-b from-purple-800 to-black  h-screen  '
      >
      <div className='box  px-[5%]  heading-container flex   justify-center  '>
        <span className='text-sky-400 text-[5vw] font-bold '>02.</span>
        <h1 id="headingText" className=' text-white  text-[5vw] font-extrabold'>Tech Stack</h1>
      </div>

      <div ref={skillref} className='id relative flex flex-col items-center overflow-auto pt-[5%] pb-[15%] gap-y-[27%] scrollbar-none w-full h-full '>
        {cards.map((card, index) => (
          <div
            className='sticky top-[1%] skillCard'>

            <SkillCard key={card.id} data={card} />

          </div>
        ))}

      </div>


    </section>
    
      
  )
}

export default SkillsPage
