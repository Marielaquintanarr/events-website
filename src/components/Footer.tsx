import { Link } from "react-router-dom";
import heart from "../assets/HeartGray.png";
import users from "../assets/Users.png";
import calendar from "../assets/Calendar.png";
import filter from "../assets/Filter.png";
import home from "../assets/Home.png";
export default function Footer() {
    return (
        <>
            <div className="bg-[#1E1E1E] flex justify-evenly p-4">
                <Link to="/"><img className="w-10 h-10" src={users}/></Link>
                <Link to="/"><img className="w-10 h-10" src={calendar}/></Link>
                <div className="bg-[#1E1E1E] w-25 h-25 rounded-full flex justify-center items-center -m-12">
                    <div className="bg-[#202FF8] hover:bg-white w-19 h-19 rounded-full flex justify-center items-center -m-10">
                        <Link className="w-15 h-15 flex justify-center items-center" to="/">
                            <img className="w-10 h-10" src={home} />
                        </Link>
                    </div>
                </div>
                <Link to="/"><img className="w-10 h-10" src={heart}/></Link>
                <Link to="/"><img className="w-10 h-10" src={filter}/></Link>
            </div>
        </>
    )
}