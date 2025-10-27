import Calendar from "../components/Calendar";
import Top from "../components/top";
import PriceFilter from "../components/PriceFilter";
import EventFilter from "../components/EventFilter";
import LocationFilter from "../components/LocationFilter";
export default function CalendarPage() {
    return (
        <>
            <div className='mt-10 ml-10 mr-10'>
                <Top />
                <h1 className="text-4xl font-semibold mt-15">Calendar </h1>
                <div className="flex gap-10 mt-5">
                    <EventFilter />
                    <PriceFilter />
                    <LocationFilter />
                </div>
                <Calendar />
            </div>
        </>
    )
}