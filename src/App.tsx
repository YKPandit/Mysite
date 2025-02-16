import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Nav/Header.tsx";
import Home from "./Pages/Home.tsx";
// import Projects from './Pages/Projects.tsx';

function App() {
    useEffect(() => {
        const cursor = document.querySelector<HTMLElement>(".cursor-shadow");

        const handleMouseMove = (e: MouseEvent) => {
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener when component unmounts
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs only once after mount

    return (
        <Router>
            <div className="fixed w-32 h-32 rounded-full pointer-events-none
                                    bg-gradient-to-r from-[#99C1DC] via-[#4C93C2] to-[#0065A9] opacity-50 blur-3xl mix-blend-screen
           transform -translate-x-1/2 -translate-y-1/2"></div>

            <header className="font-[Consolas] flex top-0 bg-[#333333] drop-shadow-md w-auto">
                <h1 className="text-3xl text-white w-64 py-2 px-2">Yaaska Pandit</h1>
            </header>

            <div className="flex bg-[#1e1e1e] min-h-screen w-auto gap-8">
                <div className="flex w-48">
                    <Header />
                </div>
                <div className="flex w-full justify-center gap-8">
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/*<Route path="/Projects" element={<Projects />} />*/}
                        </Routes>
                    </main>
                </div>
            </div>

            <footer className="bg-[#0098ff] drop-shadow-md w-auto">
                <p className="text-md text-white py-2 px-2 text-center">Made With Funny</p>
            </footer>
        </Router>
    );
}

export default App;
