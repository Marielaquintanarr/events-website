import Top from "../components/top";
import SearchBar from "../components/SearchBar";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

export default function MyTickets() {
    return (
        <>
            <div className='mt-10 ml-10 mr-10'>
                <Top />
                <SearchBar search="Tickets" />
                <h1 className="text-4xl pt-10">My Events</h1>
                <div className="mt-10">
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </div>
                <Footer />
            </div>
        </>
    )
}