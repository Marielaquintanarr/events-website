import user from "../assets/user.png";
import LocationFilter from "./LocationFilter";

export default function Top() {
    return(
        <>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-thin">Your Location</p>
                    <LocationFilter color="transparent" />
                </div>
                <img src={user} />
            </div>

        </>
    )
}