import React from 'react'
import { CategoryType } from '../types'

type CategoryProps = {
    cat: CategoryType;
    clickCategory: () => void;
}

const Category = ({cat, clickCategory}: CategoryProps) => {
    // const styles = {
    //     backgroundColor: cat.isSelected ? "#D6DBF5": "cornsilk",
    // }
    return (
    <div
        onClick={clickCategory}
        className={`rounded-[10px] text-center content-center h-[52px]
                    dark:text-white dark:bg-[#2135e8] dark:opacity-50
                    cursor-pointer border-[1px] border-solid
                    ${cat.isSelected ? 'bg-[#D6DBF5]' : 'bg-[cornsilk]'}
                    ${cat.isSelected ? 'dark:bg-slate-900' : 'bg-[cornsilk]'} 
                    hover:bg-[#D6DBF5] dark:hover:bg-slate-900`}
    >
        {cat.name}
    </div>
  )
}

export default Category