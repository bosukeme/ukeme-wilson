'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import debounce from 'lodash/debounce';

import Question from './components/Question';
// import questionArray from './data/questionData';
import { QuestionType } from './types';

import {QuizObjType} from  '../types'


function QuizQuestionsComponent() {
    
    const router = useRouter();
    
    const searchParams = useSearchParams()
    
    const quiz = searchParams.get("quiz")
    const quizObj: QuizObjType = quiz && JSON.parse(quiz)
    
    const [quizData, setQuizData] = useState<QuestionType[]>([])
    const [isFetched, setIsFetched] = useState(false);

    const [error, setError] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const [total, setTotal] = useState<Array<{ id: number; correct_answer: string; answer_selected: string }>>([]);
    const [revealAnswers, setRevealAnswers] = useState<boolean>(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);


    const handleOptionClick = (index: number, option: string, decodedText: string, setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>, question_id: number) => {
        setSelectedOptionIndex(index)

        const newAnsObj = {
            id: question_id,
            correct_answer: decodedText,
            answer_selected: option
        }

        setTotal((prevTotal) => {
            const updatedTotal = [...prevTotal]
            const existingAnswerIndex = updatedTotal.findIndex(ans => ans.id === question_id)

            if (existingAnswerIndex !== -1) {
                updatedTotal[existingAnswerIndex] = newAnsObj
            } else {
                updatedTotal.push(newAnsObj)
            }
            return updatedTotal
        })

    }

    const handleCheckAnswer = () => {

        let sc = 0 
        for (let i = 0; i < total.length; i++) {
            if (total[i].answer_selected === total[i].correct_answer) {
                sc += 1
            }
        }
        setScore(sc)
        setRevealAnswers(true)

    }

    useEffect(() => {
        if (!quizObj || quizData.length > 0) return;
    
        const fetchQuizData = debounce(() => {
            const type = quizObj.qtype === "random" ? "" : "multiple";
            const category = quizObj.category_id === 33 ? "" : quizObj.category_id;
            const difficulty = quizObj.difficulty === "random" ? "" : quizObj.difficulty;
    
            const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${type}`;
            
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    setQuizData(data.results);
                    setError(null);
                })
                .catch((error) => {
                    console.error('Error fetching quiz data:', error);
                    setError('Failed to fetch quiz data. Please try again later.');
                });
        }, 300); // 300ms debounce delay
    
        fetchQuizData();
    
        return () => {
            fetchQuizData.cancel();
        };
    }, [quizObj, quizData.length]); // Only re-run the effect if quizObj changes and quizData is empty
    


    return (
        <main className='min-h-screen'>

            <div className='mb-[80px]'>

                {quizData.length > 0 ? (
                    quizData.map((question, index) => (
                    <Question 
                        key={index} 
                        question_id={index} 
                        question={question} 
                        handleOptionClick={handleOptionClick} 
                        revealAnswers={revealAnswers}    
                    />))
                    
                    ) : (
                        <p>Loading quiz...</p>

                    )
                }

                {
                    revealAnswers ? (
                        <div className='mt-[30px] flex items-center justify-center dark:text-slate-300 px-8'>
                            <h4 >{`You scored ${score}/${quizData.length} correct answers`}</h4>
                            <button
                                type='submit'
                                className='bg-[#4D5B9E] opacity-90 h-[50px] rounded-[15px] font-medium cursor-pointer hover:bg-[#D6DBF5]  w-[115px] mt-[4px] ml-[20px]'
                                onClick={() => {
                                    setRevealAnswers(false); // Reset revealAnswers to play again
                                    setScore(0); // Reset score when playing again
                                    setSelectedOptionIndex(null); // Reset selected option index
                                    setTotal([]); // Clear total answers
                                    router.push("/quiz")
                                }}
                            >
                                Play again
                            </button>
                        </div>
                    ) : (
                        quizData.length > 0 && (
                            <div className='flex items-center justify-center mt-[30px]'>
                                <button
                                    type='submit'
                                    className=' bg-[#4D5B9E] h-[50px] w-[170px] font-medium cursor-pointer dark:text-slate-300 hover:bg-[#D6DBF5] rounded-[15px]'
                                    onClick={handleCheckAnswer}
                                >
                                    Check Answers     
                                </button>
                            </div>
                        )
                    )
                }


            </div> 
        </main>

        
    );
}


export default function QuestionPage() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <QuizQuestionsComponent />
      </Suspense>
    );
  }