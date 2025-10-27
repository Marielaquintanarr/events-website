import EventImage from "../components/EventImage";
import Line from "../components/Line";
import AddUser from "../assets/addUser.png";
import { Link } from "react-router-dom";

export default function EventDetailsPage() {
    return(
        <>
            <div className="ml-100 mr-100">
                <EventImage />
                <Line />
                <div className="flex mt-5 justify-between items-center">
                    <p className="font-thin">Invite friends</p>
                    <div className="bg-[#202347] w-8 p-2 mr-1 rounded-[4px]"><img src={AddUser} /></div>
                </div>
                <Line />
                <div className="flex mt-10 justify-between items-center mb-15">
                    <p className="text-2xl font-bold">$1500.0</p>
                    <Link className="bg-[#202FF8] p-2 pl-4 pr-4 rounded-2xl" to="/">Buy Now</Link>
                </div>
            </div>
        </>
    )
}