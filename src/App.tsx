import Header from './Nav/Header.tsx';
import Home from './Pages/Home.tsx';
// import Projects from './Pages/Projects.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <header className="font-[Consolas] flex top-0 bg-[#333333] drop-shadow-md">
                <h1 className="text-3xl text-white w-64 py-2 px-2">Yaaska Pandit</h1>
            </header>

            <div className="flex bg-[#1e1e1e] min-h-screen w-auto">
                <div className="flex w-1/5">
                    <Header/> {/* Header at the top */}
                </div>
                <div className="flex w-4/5 justify-center">
                    <main className="">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            {/*<Route path="/Projects" element={<Projects />} />*/}
                        </Routes>
                    </main>
                </div>

                    {/* Main content area where routes get displayed */}

                </div>

                <footer className="bg-[#0098ff] drop-shadow-md w-auto">
                    <p className="text-md text-white py-2 px-2 text-center">Made With Funny</p>
                </footer>
        </Router>
);
}

export default App;
