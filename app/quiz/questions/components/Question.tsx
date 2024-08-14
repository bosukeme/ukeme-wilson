'use client'

import React, { useState, useEffect } from 'react';
import { QuestionType } from '../types';


type QuestionProps = {
    question_id: number 
    question: QuestionType
    handleOptionClick: (index: number, option: string, decodedText: string, setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>, question_id: number) => void;
    revealAnswers: boolean
}



const Question = ({ question_id, question, handleOptionClick, revealAnswers }: QuestionProps) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    useEffect(() => {
        const incorrect_answers = question.incorrect_answers;
        const correct_answer = question.correct_answer;

        // Shuffle options and insert correct answer randomly
        const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1));
        const options = [...incorrect_answers];
        options.splice(randomIndex, 0, correct_answer);

        // Decode HTML entities for display
        function decodeHTMLEntities(options: string[]): string[] {
            const decodedOptionsArray: string[] = [];
            for (let i = 0; i < options.length; i++) {
                const text = options[i];
                const parser = new DOMParser();
                const dom = parser.parseFromString(`<!doctype html><body>${text}`, 'text/html');
                decodedOptionsArray.push(dom.body.textContent || '');
            }
            return decodedOptionsArray;
        }

        setShuffledOptions(decodeHTMLEntities(options));
    }, [question]);

    function decodedText(text: string): string {
        // Decode correct answer for comparison

        if (typeof window !== "undefined" && typeof DOMParser !== "undefined") {
            const parser = new DOMParser();
            const dom = parser.parseFromString(`<!doctype html><body>${text}`, 'text/html');
            return dom.body.textContent || '';
        } else {
            // Fallback or return the original text if not running on the client
            return text;
        }
    }


    return (
        <div className='mt-20 flex flex-col items-center dark:text-slate-300'>
            
            <h4 className='max-w-[300px] md:max-w-[600px] font-semibold mb-2'>{question_id +1}. {decodedText(question.question)}</h4>

            <div className='dark:text-slate-600'>
                {shuffledOptions.map((option, index) => {
                    let backgroundColor = 'white';

                    if (revealAnswers) {
                        if (option === decodedText(question.correct_answer)) {
                            backgroundColor = '#94D7A2'; // Correct answer
                        } else if (selectedOptionIndex === index && option !== decodedText(question.correct_answer)) {
                            backgroundColor = '#F8BCBC'; // Incorrect answer clicked
                        }
                    } else if (selectedOptionIndex === index) {
                        backgroundColor = '#D6DBF5'; // Selected but not revealed
                    }

                    return (
                        <div
                            key={index}
                            className='rounded-[10px] w-[250px] h-[40px] m-[5px] content-center items-center justify-center flex cursor-pointer dark:bg-slate-600'
                            style={{ backgroundColor }}
                            onClick={() => !revealAnswers && handleOptionClick(index, option, decodedText(question.correct_answer), setSelectedOptionIndex, question_id)}
                        >
                            {option}
                                
                        </div>

                    );
                })}
            </div>
            {question_id < 4 ? <hr className="h-[1px] bg-[#4D5B9E] my-[10px] mt-[20px] w-[250px]  " /> : ""}
        </div>
    );
};

export default Question;
