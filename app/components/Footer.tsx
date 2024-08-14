import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="dark:text-white">
        <div className="flex items-center justify-center gap-x-6">
            <a href='https://x.com/wilsonUkeme' target="_blank" rel="noopener noreferrer">
                <BsTwitterX size={24} className='cursor-pointer' /> 
            </a>
            <a href='https://www.linkedin.com/in/ukeme-wilson-4825a383/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className='cursor-pointer'   />
            </a>
            <a href='https://api.whatsapp.com/send?phone=2347031825057' target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} className='cursor-pointer'  />
            </a>
            <a href='mailto:ukeme.wilson@gmail.com' target="_blank" rel="noopener noreferrer">
                <MdEmail size={24} className='cursor-pointer'  />
            </a>
            <a href='https://github.com/bosukeme' target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={24} className='cursor-pointer'  />
            </a>

            <a href='https://medium.com/@ukemeboswilson' target="_blank" rel="noopener noreferrer">
            <IoLogoMedium size={24} className='cursor-pointer' />
            </a>
        </div>
        <br />
        <footer className="flex items-center justify-center">
            <h3>U.W 2024 </h3>
        </footer>

      </div>
  )
}

export default Footer;