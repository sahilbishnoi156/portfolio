import React from 'react'

const ProjectsHeader = ()=>{
    return(
        <div className='w-full text-[6vw] font-semibold flex flex-col leading-[7vw]'>
            <div className='text-[7vw]'>VISUAL</div>
            <div className='self-end'>EXPERIMENTS <span className='text-xl ml-36 text-gray-400'>2023</span></div>
        </div>
    )
}
export default function Projects() {
  return (
    <div className='my-32 px-[12vw] text-gray-100 mix-blend-difference'>
        <ProjectsHeader />
    </div>
  )
}
