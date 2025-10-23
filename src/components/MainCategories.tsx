import chevron from "../assets/chevron_right.png";
import { Link } from "react-router-dom";

export default function MainCategories() {
    return(
        <>
            <div className="mt-15 flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-5">Categories</h1>
                <div className="flex items-center gap-2">
                    <p>View All</p>
                    <img src={chevron} />
                </div>
            </div>

            <div className="mt-5 flex justify-evenly mb-10">
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Run</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Music</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Theater</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Nature</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Festive</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Food</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Food</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Food</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Food</Link>
                <Link to="/" className="bg-[#202FF8] border-2 border-transparent px-12 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors">Food</Link>
            </div>
        </>
    )
}