import FavoriteButton from "./FavoriteButtonSmall";

interface Item {
    name: string;
    image: string;
    price: string;
    date: string;
  }
  
  interface EventCardProps {
    items: Item[];
  }

const EventCard: React.FC<EventCardProps> = ({ items }) => {{
    return(
       <>
            {items?.map((item, index) => (
                <div
                    key={index}
                    className="relative w-60 h-40 rounded-2xl flex-shrink-0"
                    style={{
                        backgroundImage: `url(${item?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    >
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
                        <div className="flex bg-white/30 px-2 py-1 rounded-xl text-xs items-center justify-center">
                        <p>{item?.date}</p>
                        </div>
                        <FavoriteButton />
                    </div>

                    <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-lg font-semibold text-white drop-shadow-md">{item?.name}</p>
                        <div className="inline-flex bg-white/30 px-2 py-1 rounded-xl text-xs items-center justify-center mt-1">
                        <p>{item?.price}</p>
                        </div>
                    </div>
                </div>
            ))}
       </>
    )
}}

export default EventCard;