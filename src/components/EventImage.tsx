import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import fillHeart from "../assets/fillHeart.png";
import share from "../assets/Share.png";
import maluma from "../assets/maluma.jpg";
import location from "../assets/location_on.png";
import music from "../assets/music_note.png";

export default function EventImage() {
    return (
        <>
            <div className="p-70" style={{ backgroundImage: `url(${maluma})` }}>
                <div className="flex gap-2 flex-end">
                    <Link
                            to="/"
                            className="relative bg-[#231D20] w-8 h-8 rounded-2xl flex justify-center items-center"
                            >
                            <img src={heart} className="absolute opacity-100 hover:opacity-0 transition-opacity duration-200" />
                            <img src={fillHeart} className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                    <Link
                            to="/"
                            className="relative bg-[#231D20] w-8 h-8 rounded-2xl flex justify-center items-center"
                            >
                            <img src={share} className="absolute w-4 h-4"/>
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-2xl font-semibold">Nombre del Evento</h1>
                <p className="font-thin text-[#757676]">Dia y hora del evento</p>
                <p className="font-thin text-[#757676]">Lugar del evento</p>
                <div className="mt-2 flex gap-4">
                    <div className="flex gap-2">
                        <div className="bg-[#202347] w-6 p-1 rounded-[4px]"><img src={music} /></div>
                        <p>Hip-Hop</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-[#202347] w-6 p-1 rounded-[4px]"><img src={location} /></div>
                        <p>Bar Américas</p>
                    </div>
                </div>
            </div>
        </>
    )
}