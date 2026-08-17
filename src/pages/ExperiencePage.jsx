import ExCard1 from "../components/ExperiencePage/ExCard1"
import ExCard2 from "../components/ExperiencePage/ExCard2"
import { Download } from 'lucide-react';
import { useEffect } from "react";
import gsap from "gsap"

const firstData =[
    {
        time:'Present', 
        h:'Self-Directed Learning', 
        p:'Deep diving into advanced Web Dev, AI & ML architectures, and Data Science methodologies.'
    },
    {
        ime:'2023', 
        h:'Data Science with Python', 
        p:'Mastered data manipulation, exploratory data analysis, and predictive modeling using industry-standard libraries.' 
    },
    {
        time:'2022', 
        h:'Machine Learning Fundamentals', 
        p:'Completed comprehensive training on ML algorithms, model evaluation, and deployment strategies.'
    },
    {
        time:'2021', 
        h:'Frontend Development Mastery', 
        p:'Built a strong foundation in modern web technologies, focusing on component-driven architecture and responsive design.'
    }
]

const secondData =[
    {
        h:'Machine Learning Specialization', 
        p:'Coursera (Stanford/DeepLearning.AI)', 
        year:'2023'
    },
    {
        h:'Google Data Analytics', 
        p:'Coursera', 
        year:'2023'
    },
    {
        h:'Python for Everybody', 
        p:'Coursera', 
        year:'2022'   
    },
    {
        h:'JavaScript Algorithms & Data Structures', 
        p:'freeCodeCamp' ,
        year:'2021'
    },
    {
        h:'Responsive Web Design', 
        p:'freeCodeCamp', 
        year:'2021'
    }
]


const ExperiencePage = () => {

    useEffect(()=>{
        const all = gsap.utils.toArray(".heading");
    
        all.forEach((el)=>{
         gsap.from(el, {
            y:-50,
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
        const all = gsap.utils.toArray(".firstcard");
    
        all.forEach((el)=>{
         gsap.from(el, {
            scale:0.8,
            duration:2,
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
        const all = gsap.utils.toArray(".secondcard");
    
        all.forEach((el)=>{
         gsap.from(el, {
            scale:0.8,
            duration:2,
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
        gsap.from(".resume", {
            scale:0.8,
            duration:2,
            stagger:0.2,
            ease:"power3.out",
            scrollTrigger:{
                trigger: "resume",
                start:"top 80%",
                toggleActions: "restart none none none"
            }
            })
    })
  return (
    <div>

        <div 
            className='bg-gray-900 
            grid grid-cols-2 pt-[6%] pb-[7%] border-b border-gray-600'>

            <div className='grid-cols-1'>

                <div className="heading flex justify-cente items-center ml-[5.7%] mb-[3%] gap-[2%] ">
                    <span className="text-sky-400 text-[1.3vw] font-extrabold ">04.</span>
                    <h1 className="text-white text-[2.8vw] font-extrabold">Journey</h1>
                </div>

                <div className="firstcard flex flex-col space-y-[3%] ">

                    {firstData.map((item, index) => {
                    return(
                        <ExCard1 
                            time={item.time} 
                            h={item.h} 
                            p={item.p} 
                        />
                    )})}

                </div>
                

            </div>

            <div className='grid-cols-2 flex flex-col '>
                <div className="heading flex justify-cente items-center ml-[5.7%] mb-[3%] gap-[2%]">
                    <span className="text-fuchsia-400 font-extrabold text-[1.3vw]">05.</span>
                    <h1 className="text-white text-[2.8vw] font-extrabold">Certifications</h1>
                </div>

                <div className="secondcard flex flex-col space-y-[1.6%] ">
                    
                    {secondData.map((item, index) => {
                    return(
                        <ExCard2 
                            h={item.h} 
                            p={item.p} 
                            year={item.year}
                        />
                    )})}
                </div>
                <div 
                    className="resume flex flex-col text-white 
                    justify-center items-center w-[90%] 
                    h-[15vw] mt-[6%] ml-[3%] border 
                    border-gray-400/30 
                    bg-linear-to-r from-green-400/15 to-blue-400/15 rounded-2xl
                    hover:bg-linear-to-l hover:from-sky-400/15 hover:to-purple-400/15  ">

                    <h1 
                        className="text-[1.8vw] font-extrabold mb-[2.5%]">
                        Looking for the full picture?
                    </h1>
                    <p 
                        className="text-gray-400">
                        Download my comprehensive resume 
                        for a detailed view of my skills and experience.
                    </p>

                    <button 
                        className=" px-[7%] py-[1.5%] mt-[3%] 
                        bg-green-500 flex text-gray-900 
                        font-semibold text-sm gap-[0.5vw] 
                        rounded-lg hover:bg-linear-to-l 
                        hover:from-green-500 hover:to-blue-500">
                            
                        <Download size={18} />
                        Download Resume

                    </button>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ExperiencePage
