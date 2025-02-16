// src/Pages/Home.tsx
function Home() {
    return (
        <>
            <div className="flex flex-col-2 gap-8 w-auto">
                <div className="w-1/2 bg-[#252525] hover:bg-[#99C1DC] position relative top-8 py-20 px-5 drop-shadow-md text-white resize-none sm:resize rounded-lg transition-all duration-300 hover:scale-110">
                    <h1 className="text-2xl">Welcome to My Website!</h1>
                    <p className="">My name is Yaaska I am a second year computer science student at SFU</p>
                </div>

                <div className="w-1/2 bg-[#252525] hover:bg-[#99C1DC] position relative top-8 py-20 px-5 drop-shadow-md text-white resize-none sm:resize rounded-lg transition-all duration-300 hover:scale-110">

                    <h1 className="text-2xl">Interests</h1>
                    <p>I love watching formula 1 and soccer</p>
                </div>
            </div>

            <div className="flex flex-col-2 gap-8 w-full">
                <div className="w-1/2 bg-[#252525] hover:bg-[#99C1DC] position relative top-16 py-20 px-5 drop-shadow-md text-white resize-none sm:resize rounded-lg transition-all duration-300 hover:scale-110">

                    <h1 className="text-2xl">Smth</h1>
                    <p>Tbh I didn't know what to put here, so imma just leave this here</p>
                </div>

                <div className="w-1/2 bg-[#252525] hover:bg-[#99C1DC] position relative top-16 py-20 px-5 drop-shadow-md text-white resize-none sm:resize rounded-lg transition-all duration-300 hover:scale-110">

                    <h1 className="text-2xl">Development Interests</h1>
                    <p>I like to develop low level programs and work on embedded systems, plus developing cutting edge AI systems</p>
                </div>
            </div>

        </>
    )
        ;
}

export default Home;
