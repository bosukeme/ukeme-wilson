"use client"

import {useState} from "react"; 
import skillsArray from "./data/skillsData";
import Skill from "./components/Skills";


export default function SkillPage() {

    const [searchSkill, setSearchSkill] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchSkill(e.target.value.toLowerCase())
    }

    const filteredBooks = skillsArray?.filter((sk) =>
      sk.name.toLowerCase().includes(searchSkill)
  );


    return (
      <main className="min-h-screen ">

        <div className="w-full flex justify-end mt-16 mb-8 mr-10 ">
          <input 
            className="
                h-14 pl-3 mr-8 text-base font-semibold rounded-xl tracking-widest
                xs:w-[200px]
                md:mr-10 md:w-[210px]
                lg:mr-12 lg:w-[220px]
                xl:mr-14 xl:w-[230px]
                "
            type="text"
            onChange={handleSearch}
            placeholder='Search'
          />
        </div>

        <div className="
            w-full rounded-3xl py-10 px-8 mx-auto mb-8
            md:px-10
            lg:px-12
            xl:px-14
            ">
              <div className='grid gap-3 grid-cols-2'>
                  {filteredBooks.map((item, index) => <Skill key={index} skill={item} />)}
              </div>  
        </div>    
      </main>
    );
  }
  