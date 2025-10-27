import Top from "../components/top";
import SearchBar from "../components/SearchBar";
import DateFilter from "../components/DateFilter";
import PriceFilter from "../components/PriceFilter";
import CategoryCarousel from "../components/CategoryCarrousel";
import EventSlide from "../components/EventSlide";
import Footer from "../components/Footer";

export default function CategoryPage() {
    const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
    return(
        <>
            <div className='mt-10 ml-10 mr-10'>
                <Top />
                <SearchBar search="Event" />
                <div className="flex mt-10 mb-5">
                    <DateFilter />
                    <PriceFilter />
                    </div>

                <CategoryCarousel items={items} />
                <h1 className="text-3xl font-bold mb-10 mt-10">Events</h1>
                <EventSlide />
                <EventSlide />
                <EventSlide />
                <EventSlide />
                <div className="mt-20">
                    <Footer />
                </div>
            </div>
        </>
    )
}