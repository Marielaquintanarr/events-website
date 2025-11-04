import Top from "../components/top";
import SearchBar from "../components/SearchBar";
import DateFilter from "../components/DateFilter";
import PriceFilter from "../components/PriceFilter";
import CategoriesImage from "../components/CategoriesImage";
import EventSlide from "../components/EventSlide";
import Footer from "../components/Footer";
import classic from "../assets/classic.jpg";
import electro from "../assets/electro3.jpg";
import rave from "../assets/rave.jpg";
import reggaeton from "../assets/reggaeton3.jpg";
import jazz from "../assets/jazz2.jpg";
import rock from "../assets/rock2.jpg";
import kpop from "../assets/kpop2.webp";
import pop from "../assets/pop.avif";
import indie from "../assets/indie.png";
import rap from "../assets/rap.jpg";
import LocationFilter from "../components/LocationFilter";

export default function CategoryPage() {
    const items = [
        { name: 'Classic', image: classic},
        { name: 'Electro', image: electro },
        { name: 'Rave', image: rave },
        { name: 'Reggaeton', image: reggaeton },
        { name: 'Jazz', image: jazz },
        { name: 'Rock', image: rock },
        { name: 'K-Pop', image: kpop },
        { name: 'Pop', image: pop },
        { name: 'Indie', image: indie },
        { name: 'Rap', image: rap },
      ];
    return(
        <>
            <div className='mt-10 ml-10 mr-10'>
                <Top />
                <SearchBar search="Event" />
                <div className="flex mt-10 mb-5 gap-5">
                    <DateFilter />
                    <PriceFilter />
                    <LocationFilter color={"#282827"} />
                </div>
                <CategoriesImage items={items} />
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