// src/Pages/Home.tsx
function Home() {
    return (
        <>
            <div className="flex gap-4 w-full">
                <div className="w-1/2 bg-[#252525] position relative top-8 p-20 drop-shadow-md text-white">
                    <h1 className="text-2xl">Welcome to My Website!</h1>
                    <p>My name is Yaaska I am a second year computer science student at SFU</p>
                </div>

                <div className="w-1/2 bg-[#252525] position relative top-8 p-20 drop-shadow-md text-white">

                    <h1>Welcome to the Home Page!</h1>
                    <p>This is the main content of the Home page.</p>
                </div>
            </div>

            <div className="flex gap-4 w-full">
                <div className="w-1/2 bg-[#252525] position relative top-16 p-20 drop-shadow-md text-white">

                    <h1>Welcome to the Home Page!</h1>
                    <p>This is the main content of the Home page.</p>
                </div>

                <div className="w-1/2 bg-[#252525] position relative top-16 p-20 drop-shadow-md text-white">

                    <h1>Welcome to the Home Page!</h1>
                    <p>This is the main content of the Home page.</p>
                </div>
            </div>

        </>
    )
        ;
}

export default Home;
