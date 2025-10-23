import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import event from "../assets/event.png";
import fillHeart from "../assets/fillHeart.png";

export default function Card() {
    return (
        <>
            <div className="w-64 h-96 round-[10px] rounded-2xl flex flex-col justify-end" style={{ backgroundImage: `url(${event})` }}>
                <div className="m-7">
                    <div className="mb-5">
                        <h1 className="text-white text-3xl m-0 font-semibold text-left">Event</h1>
                        <h1 className="text-3xl m-0 font-semibold text-left">Title</h1>
                        <p className="font-semibold m-0 text-left">Event date</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link className="bg-[#2041FF] pl-5 pr-5 pt-1 pb-1 rounded-2xl font-thin text-xs flex justify-center items-center hover:bg-white hover:text-black" to="/">More info</Link>
                        <Link
                            to="/"
                            className="relative bg-[#231D20] w-8 h-8 rounded-2xl flex justify-center items-center"
                            >
                            <img src={heart} className="absolute opacity-100 hover:opacity-0 transition-opacity duration-200" />
                            <img src={fillHeart} className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}