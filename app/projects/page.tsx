import projectArray from "./data/projectData";


export default function ProjectPage() {

    return (
        <div className="my-16
                        xs:px-8
                        sm:px-12
                        md:px-40
                        lg:px-64
                        xl:px-96
                        ">

            {projectArray.map((project) => (
                <div key={project.id} className="
                            flex flex-col items-center mt-10 dark:text-slate-50 border-2 border-gray-800 rounded-lg shadow-[10px_20px_10px_rgba(0,0,0,0.55)] p-4
                "> 
                    <h2 className="
                            font-bold text-[15px] mb-4
                            sm:text-[25px]
                            md:text-[23px]
                            lg:text-[29px]
                            xl:text-[28px]
                                ">
                                    {project.title}
                    </h2>

                    {project.content.map((cont, index) => (
                        <p key={index} className="mb-4 text-sm md:text-base lg:text-lg "> {cont} </p>
                    ))}
                    
                    <a href={project.link} target="_blank">
                        <div className="grid grid-cols-3 gap-[1px] w-full border border-black dark:border-slate-200 rounded-lg">
                            <div className="col-span-2  p-2 break-words flex flex-col justify-evenly">
                                <h2 className="mb-2 font-bold md:text-lg lg:text-xl xl:text-2xl ">{project.githubTitle} </h2>
                                <p className="text-xs mb-2 md:text-base lg:text-lg xl:text-xl">
                                    contribute to {project.githubTitle}
                                </p>
                                <p className="text-xs md:text-base lg:text-lg xl:text-xl">github.com</p>
                                
                                
                            </div>

                            <div className="col-span-1">
                                <img src={project.image_url} alt="picture" className="h-full w-full object-cover rounded-lg" />
                            </div>


                        </div>
                            
                    </a>

                    <div className="flex flex-row flex-wrap gap-2 mt-[0.5rem]">
                        {project.tags.map((tag, index) => (
                            <div key={index} className="border-1 rounded-[100px] py-[5px] px-[12px] text-center bg-blue-300 bg-opacity-40 text-sm">
                                {tag} 
                            </div>

                        ))}
                    </div>




                </div>


            )) }            

        </div>
    );
}