import icon from "../assets/icon.png";
import chevron from "../assets/chevron.png";
import user from "../assets/user.png";

export default function Top() {
    return(
        <>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-thin">Your Location</p>
                    <div className="flex items-center gap-3 mt-2">
                        <img className="w-5 h-6" src={icon} />
                        <p className="text-xl">Guadalajara</p>
                        <img src={chevron} />
                    </div>
                </div>
                <img src={user} />
            </div>

        </>
    )
}