import Top from '../components/top';
import SearchBar from '../components/SearchBar';
import MainCategories from '../components/MainCategories';
import ScrollableCarousel from '../components/Carrousel';
import CardCarousel from '../components/Cards';
import Footer from '../components/Footer';
export default function Homepage() {
    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
    const cards = [
        { id: 1, title: "Card 1", image: "https://picsum.photos/id/1018/300/400" },
        { id: 2, title: "Card 2", image: "https://picsum.photos/id/1025/300/400" },
        { id: 3, title: "Card 3", image: "https://picsum.photos/id/1033/300/400" },
        { id: 4, title: "Card 4", image: "https://picsum.photos/id/1041/300/400" },
        { id: 5, title: "Card 5", image: "https://picsum.photos/id/1041/300/400" },
      ];
    return (
        <>
            <div className='mt-10 ml-10 mr-10'>
                <Top />
                <SearchBar search='Events' />
                <MainCategories />
                <h1 className="text-3xl font-bold mb-10 mt-15">Next events</h1>
                <ScrollableCarousel items={items.map((item) => <span>{item}</span>)} />
                <h1 className="text-3xl font-bold mb-10 mt-15">Top events</h1>
                <CardCarousel items={cards} /> 
                <div className='mt-15'>
                    <Footer /> 
                </div>              
            </div>
        </>
    )
}