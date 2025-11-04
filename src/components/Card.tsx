import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import fillHeart from "../assets/fillHeart.png";

interface Item {
  title1: string;
  title2: string;
  image: string;
  date: string;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div
      className="w-64 h-96 rounded-2xl flex flex-col justify-end bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="m-7">
        <div className="mb-5">
          <h1 className="text-white text-3xl font-semibold text-left drop-shadow-md">
            {item.title1}
          </h1>
          <h1 className="text-white text-3xl font-semibold text-left drop-shadow-md">
            {item.title2}
          </h1>
          <p className="font-semibold text-left text-white drop-shadow-sm">{item.date}</p>
        </div>

        <div className="flex justify-between items-center">
          <Link
            className="bg-[#2041FF] px-5 py-1 rounded-2xl font-thin text-xs flex justify-center items-center hover:bg-white hover:text-black"
            to="/"
          >
            More info
          </Link>
          <Link
            to="/"
            className="relative bg-[#231D20] w-8 h-8 rounded-2xl flex justify-center items-center"
          >
            <img
              src={heart}
              className="absolute opacity-100 hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src={fillHeart}
              className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
