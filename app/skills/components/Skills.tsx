import React from 'react'
import { SkillsArrayType } from '../types'

type SkillProps = {
    skill: SkillsArrayType;
  };


const Skill: React.FC<SkillProps> = ({skill}) => {
  return (
    <div className='flex flex-col justify-center rounded-xl h-14 bg-slate-300'>
        <h3 className='text-[rgb(0,0,255)] font-bold text-base text-center'>{skill.name}</h3>
        <div className='bg-[#0d6efd] w-full h-1 relative'> 
            <span className='z-[1] h-full bg-[#e8676b] rounded-2xl transition-[width] duration-[400ms] ease-out delay-[100ms]  block' style={{width: `${skill.level}%`}}></span>
        </div>
        
    </div>
  )
}

export default Skill