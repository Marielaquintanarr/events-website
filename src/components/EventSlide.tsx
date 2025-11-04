import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import fillHeart from "../assets/fillHeart.png";
import event from "../assets/event.png";

export default function EventSlide() {
    return (
        <Link to="/eventDetails" className="flex justify-between items-center p-4 bg-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border-b-2 border-[#282827] mb-5">
            <div className="flex justify-center items-center gap-4">
                <img 
                    className="w-30 h-30 transition-transform duration-300 group-hover:scale-110" 
                    src={event || "/placeholder.svg"}
                    alt="Event"
                />
                <div>
                    <h1 className="font-bold text-2xl">Event Title</h1>
                    <p className="font-thin text-sm">Event date</p>
                    <p className="font-thin text-sm">Event location</p>
                </div>
            </div>
            <Link 
                to="/" 
                className="relative w-8 h-8 rounded-2xl flex justify-center items-center transition-transform duration-200 hover:scale-125"
            >
                <img 
                    src={heart || "/placeholder.svg"} 
                    className="absolute opacity-100 hover:opacity-0 transition-opacity duration-200" 
                    alt="Like"
                />
                <img 
                    src={fillHeart || "/placeholder.svg"} 
                    className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200" 
                    alt="Liked"
                />
            </Link>
        </Link>
    );
}