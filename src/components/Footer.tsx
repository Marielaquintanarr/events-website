import { Link } from "react-router-dom";
import heart from "../assets/HeartGray.png";
import users from "../assets/Users.png";
import calendar from "../assets/Calendar.png";
import filter from "../assets/Filter.png";
import home from "../assets/Home.png";
import grayHome from "../assets/HomeGray.png";

export default function Footer() {
    return (
        <>
            <div className="fixed bottom-0 left-0 w-full bg-[#1E1E1E] flex justify-evenly p-4">
                <Link to="/"><img className="w-10 h-10" src={users}/></Link>
                <Link to="/"><img className="w-10 h-10" src={calendar}/></Link>
                <div className="bg-[#1E1E1E] w-25 h-25 rounded-full flex justify-center items-center -m-12">
                    <div className="bg-[#202FF8] hover:bg-white w-19 h-19 rounded-full flex justify-center items-center -m-10">
                    <Link 
                        to="/myTickets" 
                        className="relative w-8 h-8 rounded-2xl flex justify-center items-center"
                    >
                        <img 
                            src={home || "/placeholder.svg"} 
                            className="absolute opacity-100 hover:opacity-0 transition-opacity" 
                            alt="Home"
                        />
                        <img 
                            src={grayHome || "/placeholder.svg"} 
                            className="absolute opacity-0 hover:opacity-100 transition-opacity" 
                            alt="Homed"
                        />
                    </Link>
                    </div>
                </div>
                <Link to="/"><img className="w-10 h-10" src={heart}/></Link>
                <Link to="/"><img className="w-10 h-10" src={filter}/></Link>
            </div>
        </>
    )
}