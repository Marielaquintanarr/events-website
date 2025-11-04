import heart from "../assets/heart.png";
import fillHeart from "../assets/fillHeart.png";

export default function FavoriteButtonSmall() {
  return (
    <div
      className="group relative bg-[#231D20] w-7 h-7 rounded-full flex justify-center items-center"
    >
      <img
        src={fillHeart}
        alt="Favorito"
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-200 w-3 h-3"
      />
      <img
        src={heart}
        alt="No favorito"
        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-3 h-3"
      />
    </div>
  );
}
