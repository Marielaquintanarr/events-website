import Top from '../components/Top';
import SearchBar from '../components/SearchBar';
import ScrollableCarousel from '../components/Carrousel';
import CategoriesCarrousel from '../components/CategoriesCarrousel';
import CardCarousel from '../components/Cards';
import Footer from '../components/Footer';

export default function Homepage() {
    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
    const categories = [
        'Conciertos',
        'Teatro',
        'Museos y Exposiciones',
        'Cine',
        'Festivales',
        'Ferias y Mercados',
        'Gastronomía',
        'Deportes',
        'Vida Nocturna',
        'Eventos Culturales',
        'Eventos Familiares',
        'Eventos al Aire Libre',
        'Charlas y Conferencias',
        'Talleres y Cursos',
        'Moda y Belleza',
        'Tecnología e Innovación',
        'Arte y Diseño',
        'Baile y Danza',
        'Eventos Religiosos',
        'Eventos Benéficos',
        'Lanzamientos y Presentaciones',
        'Desfiles y Paradas',
        'Tradiciones y Fiestas Locales'
      ];
      
      
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
                <h1 className="text-3xl font-bold mb-10 mt-15">Categories</h1>
                <CategoriesCarrousel items={categories} />
                <h1 className="text-3xl font-bold mb-10 mt-15">Next events</h1>
                <ScrollableCarousel />
                <h1 className="text-3xl font-bold mb-10 mt-15">Top events</h1>
                <CardCarousel items={cards} /> 
                <div className='mt-15'>
                    <Footer /> 
                </div>              
            </div>
        </>
    )
}