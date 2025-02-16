import { FaHome, FaWrench, FaPaperPlane, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="font-[Consolas]">

            <div className="inline-block top-0 bg-[#333333] font-medium h-full w-48 py-4 drop-shadow-md">

                <div className="group flex justify-left text-white py-2 px-2 hover:bg-[#5B5B5B]">
                    <div className="flex items-center justify-left bg-[#333333] group-hover:bg-[#5B5B5B]">
                        <FaHome className="h-6 w-6 p-1"/>
                    </div>
                    <Link to="/" className="text-xl">Home</Link>
                </div>

                <Link to="/Projects" className="group flex justify-left text-white py-2 px-2 hover:bg-[#5B5B5B]">
                    <div className="flex items-center justify-center bg-[#333333] group-hover:bg-[#5B5B5B]">
                        <FaWrench className="h-6 w-6 p-1"/>
                    </div>
                    <span className="text-xl">Projects</span>
                </Link>

                <Link to="/Contact" className="group flex justify-left text-white py-2 px-2 hover:bg-[#5B5B5B]">
                    <div className="flex items-center justify-center bg-[#333333] group-hover:bg-[#5B5B5B]">
                        <FaPaperPlane className="h-6 w-6 p-1"/>
                    </div>
                    <span className="text-xl">Contact</span>
                </Link>

                <Link to="/Photos" className="group flex justify-left text-white py-2 px-2 hover:bg-[#5B5B5B]">
                    <div className="flex items-center justify-center bg-[#333333] group-hover:bg-[#5B5B5B]">
                        <FaCamera className="h-6 w-6 p-1"/>
                    </div>
                    <span className="text-xl">Photos</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
