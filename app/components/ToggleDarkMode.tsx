"use client"

import { useEffect, useState } from "react"

import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiCloudSunLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";

import React from 'react'

const ToogleDarkMode = () => {
    const size = "24px";
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
    
    const switchMode = ()=> {
        setDarkMode(!darkMode);
    };

    useEffect(()=> {
        if (darkMode) {
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add("dark");
        } else if (darkMode === false) {
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark"); 
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true");
        }

    }, [darkMode]);
    
    return (
        <header className="flex items-center justify-end w-full p-4">
            <div 
                className="transition cursor-pointer hover:text-blue-500 mr-4 lg:mr-14"
                onClick={switchMode}
            >
                {!darkMode ? (
                    <FaMoon size={size} />
                ): (
                    <PiCloudSunLight className=" bg-white"
                    size={size}/>
                )}

            </div>

        </header>
    )
}

export default ToogleDarkMode;