import ticket from "../assets/Ticket.png";
import { Link } from "react-router-dom";

export default function TicketButton() {
    return(
        <>
            <Link to="/eventDetails"
                className="bg-[#030C99] flex w-18 h-18 rounded-[5px] justify-center items-center gap-1 text-white"
                >
                    <p className="text-sm font-bold">1</p>
                    <img
                        src={ticket}
                        className="w-9 h-9 rotate-90"
                    />
            </Link>
        </>
    )
}