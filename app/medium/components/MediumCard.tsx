import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { MdFavorite } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { FaHandsClapping } from "react-icons/fa6";

import { MediumArrayType } from '../types';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type MediumProp = {
    medium: MediumArrayType;
    onShareClick: () => void;
}




export default function MediumCard({medium, onShareClick}: MediumProp) {
  
    const [expanded, setExpanded] = React.useState<boolean>(false);


  const avatarColors: string[] = ["rgba(255,0,0,0.7)", "rgba(0,255,0,0.7)", "rgba(0,0,255,0.7)"]
  
  const randomNum: number = Math.floor(Math.random() * avatarColors.length)
  const avatarColor: string = avatarColors[randomNum]
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-xs mb-4 rounded-lg shadow-lg bg-white dark:bg-slate-700 dark:text-white">
      {/* Card Header */}
      <div className="flex items-center py-4 px-3 ">
        <div
          className="flex items-center justify-center max-w-[41px] w-24 h-10 rounded-[50%]"
          style={{background: avatarColor}}
          aria-label="avatar"
        >
          <span className="text-white font-bold">
            {medium.title[0]}
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{medium.title}</h3>
          <p className="text-gray-500">{medium.date}</p>
        </div>
      </div>

      {/* Card Media */}
      <img
        className="w-full h-48 object-cover"
        src={medium.image_url}
        alt="Article image"
      />

      {/* Card Content */}
      <div className="p-4 ">
        <p className="text-gray-700 dark:text-white">
          {medium.miniContent}
        </p>
      </div>

      {/* Card Actions */}
      <div className="flex items-center p-4  ">
        {medium.clapCount}
        <button
          aria-label="add to favorites"
          className={`text-gray-700 dark:text-white hover:text-red-500 hover:dark:text-blue-400 focus:outline-none`}
        >
           <FaHandsClapping className='ml-2' size={24} />
          {/* <MdFavorite size={24} className={`${medium.favClicked ? "text-red-500" : ""} `} /> */}
        </button>

        <button
          aria-label="share"
          className="ml-4 text-gray-700 dark:text-white hover:text-blue-500 hover:dark:text-blue-400 focus:outline-none"
          onClick={onShareClick}
        >
          <IoShareSocial size={24} />
        </button>

        <button
          aria-label="show more"
          className="ml-auto text-gray-700 dark:text-white hover:text-blue-500 hover:dark:text-blue-400 focus:outline-none"
          onClick={handleExpandClick}
        >
          <MdExpandMore size={34} className={`${expanded ? "rotate-180" : ""} transition-transform`} />
        </button>
      </div>

      {/* Collapse Content */}
      {expanded && (
        <div className="p-4 text-gray-700 dark:text-white">
            {medium.dropDownContent.map(paragraph  => (
              <p className="font-base pb-3" key={medium.id}>{paragraph}</p>
            ))}
            <p className="font-semibold pb-3"> Continue reading <a className=' border-b border-dotted border-black dark:border-white' href={medium.link}> here...</a>  </p>
          
        </div>
      )}
    </div>

    

  );
}
