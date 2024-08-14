"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

import categoryData from './data/categoryData'
import { QuizObjType, CategoryType } from "./types";
import Category from "./components/Category";
import { FaUserNinja } from "react-icons/fa6";



export default function QuizPage() {
    
    const router = useRouter();

    const [quizObj, setQuizObj] = useState<QuizObjType>({
        difficulty: "",
        qtype: "",
        category_id: "",
    })

    const [catData, setCatData] = useState<CategoryType[]>(categoryData)
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setQuizObj(obj => {
            return {
                ...obj,
                [name]: value
            }
        })

    }

  const clickCategory = (id: number) => {

      setCatData(catData.map(cat => ({ 
                  ...cat, 
                  isSelected: cat.id === id })
              ));

      setQuizObj(obj => ({
              ...obj,
              category_id: id,
          }))

  }

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        setLoading(true);
        try {
            const queryQuizObj = JSON.stringify(quizObj); 
            router.push(`/quiz/questions?quiz=${queryQuizObj}`);
        } catch (error) {
            console.error("Failed to submit form", error);
            setLoading(false); // Reset loading state if there's an error
        }
    };

    // Quiz Time <span className="dark:filter dark:invert">🐱‍👤</span>
    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-[20px] px-[24px] ">
            
            <h1 className=' flex items-center
                text-[42px] font-bold text-[#293264] dark:text-slate-200 mt-[40px]
                md:text-[52px]
                lg:text-[62px]
                '>
                    Quiz Time  <FaUserNinja className="ml-4" />
                    
            </h1>
            <p className='text-[16px] text-[#293264] dark:text-slate-200 mb-[40px] text-center'>This is a selection of quizzes from https://opentdb.com </p>


            <form 
                className='flex flex-col items-center text-[#293264] dark:text-slate-200'
                onSubmit={handleSubmit}
            >

                <fieldset className='h-[60px] flex items-center  mb-[40px] pl-[30px]  
                        xs:text-[16px]
                        sm:text-[18px]
                        md:text-[20px] '>
                    <legend className="text-center">Select Difficulty</legend>
                    <input
                        type='radio'
                        name="difficulty"
                        id="easy"
                        value="easy"
                        checked={quizObj.difficulty === "easy"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='easy'>Easy</label>

                    <input
                        type='radio'
                        name="difficulty"
                        id="medium"
                        value="medium"
                        checked={quizObj.difficulty === "medium"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='medium'>Medium</label>

                    <input
                        name="difficulty"
                        id="hard"
                        value="hard"
                        type='radio'
                        checked={quizObj.difficulty === "hard"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='hard'>Hard</label>

                    <input
                        name="difficulty"
                        id="random"
                        value="random"
                        type='radio'
                        checked={quizObj.difficulty === "random"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='random'>Random</label>

                </fieldset>


                <fieldset className='h-[60px] flex items-center  mb-[40px] pl-[30px]
                                    xs:text-[16px]
                                    sm:text-[18px]
                                    md:text-[20px]
                '>
                    <legend className="text-center">Select Question Type</legend>
                    <input
                        type='radio'
                        name="qtype"
                        id="multiple"
                        value="multiple"
                        checked={quizObj.qtype === "multiple"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='multiple'>Multiple</label>
                    
                    <input
                        type='radio'
                        name="qtype"
                        id="qtypeRandom"
                        value="random"
                        checked={quizObj.qtype === "random"}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <label className='ml-1 mr-[22px] ' htmlFor='qtypeRandom'>Random</label>
                </fieldset>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-[12px] mb-[40px]'>
                    {catData.map(cat =>  <Category key={cat.id} cat={cat} clickCategory={() => clickCategory(cat.id)}  />)}
                    

                </div>

                <button
                    type='submit'
                    className={`w-[240px] md:w-[480px] cursor-pointer text-lg text-white h-[50px] bg-[#4D5B9E] rounded-[15px] mb-10 ${
                        loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#D6DBF5] dark:hover:bg-slate-900 dark:hover:opacity-50"
                    }`}  
                    disabled={loading}  
                >
                 {loading ? (
                        <div className="flex items-center justify-center">
                            <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                            Loading...
                        </div>
                    ) : (
                        "Start Quiz"
                    )}
                </button>


                
            </form>

        </main> 
    );
}