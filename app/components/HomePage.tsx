import Image from "next/image"

export default function HomePage() {
    const mediumWidth = 288
    const largeWidth = 320

    return (
        <div className="mx-auto p-14 mt-6 dark:text-white md:mx-14 md:mt-14 lg:mx-20 lg:mt-20 xl:pl-36" >
            
            <div className="md:flex md:gap-x-4 lg:gap-x-8 xl:gap-x-20">

                <div className="max-w-[510px] md:max-w-sm lg:max-w-md">
                    <h3  className="text-2xl md:text-3xl lg:text-4xl font-bold">Hello 👋</h3>
                    <br />
                    <h2 className="xs:text-[1.7rem] sm:text-[2.2rem] md:text-4xl lg:text-5xl text-4xl font-bold">
                        I&apos;m Ukeme Wilson
                    </h2> 
                    <br />
                    <p className="text-base md:text-lg lg:text-xl" >
                        I&apos;m a passionate Senior Backend Developer with over 6 years of experience in Python development.
                        I specialize in crafting robust and scalable web applications using Python, Flask, and Django.
                        Continuously learning and evolving, my goal is to build cutting-edge software that solves complex problems and delivers real value.

                    </p>
                </div>
                <br />
                {/* md:h-72 h-72 w-full md:w-72 lg:h-80 lg:w-80 */}
                <div className="relative rounded-lg w-full h-72 max-w-[510px] md:w-96">
                    <Image 
                        className="rounded-lg object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src="/ukeme2-cropped.png"
                        alt="display picture"
                    />
                </div>

            </div>


        </div>
    );
}
