import EventImage from "../components/EventImage";
import Line from "../components/Line";
import AddUser from "../assets/addUser.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function EventDetailsPage() {
    return(
        <>
            <div className='mt-10 ml-10 mr-10'>
                <EventImage />
                <Line />
                <div className="flex mt-5 justify-between items-center">
                    <p className="font-thin">Invite friends</p>
                    <div className="bg-[#202347] w-8 p-2 mr-1 rounded-[4px] border-2 border-transparent hover:border-white hover:bg-transparent curosr-pointer"><img src={AddUser} /></div>
                </div>
                <Line />
                <div className="flex mt-10 justify-between items-center mb-25">
                    <p className="text-2xl font-bold">$1500.0</p>
                    <Link className="bg-[#202FF8] p-2 pl-4 pr-4 rounded-2xl border-2 border-transparent rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8]" to="/">Buy Now</Link>
                </div>
                <Footer />
            </div>
        </>
    )
}