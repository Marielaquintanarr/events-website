import ticket from "../assets/Ticket.png";
import hover_ticket from "../assets/ticket_hover.png";
import maluma from "../assets/maluma.jpg";
import { Link } from "react-router-dom";

export default function Ticket() {
    return(
        <>
            <div
                style={{
                    backgroundImage: `url(${maluma})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="flex flex-col justify-end w-full h-96 rounded-xl mb-15 p-10"
                >
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <p className="text-3xl font-semibold text-white">Event Title</p>
                        <p className="text-xl text-white">Sat 16 Nov, Akron Stadium</p>
                        <p className="text-xl font-thin text-white">5 pm</p>
                    </div>
                    <Link
                        to="/eventDetails"
                        className="bg-[#030C99] flex w-18 h-18 rounded-[5px] justify-center items-center gap-1 hover:bg-white text-white hover:text-black"
                        >
                        <p className="text-sm font-bold">1</p>
                        <img
                            src={ticket}
                            className="w-9 h-9 rotate-90 hover:opacity-0"
                        />
                        <img
                            src={hover_ticket}
                            className="w-9 h-9 rotate-90 absolute opacity-0 hover:opacity-100"
                        />
                    </Link>
                 </div>
            </div>

        </>
    )
}