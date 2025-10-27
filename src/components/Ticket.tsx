import { Link } from "react-router-dom";
import maluma from "../assets/maluma.jpg";

export default function Ticket( { ButtonType } ) {
    return(
        <>
            <Link to="/eventDetails" >
                <div
                    style={{
                        backgroundImage: `url(${maluma})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="flex flex-col justify-end w-full h-96 rounded-xl mb-15 p-10"
                    >
                    <div className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="text-3xl font-semibold text-white">Event Title</p>
                            <p className="text-xl text-white">Sat 16 Nov, Akron Stadium</p>
                            <p className="text-xl font-thin text-white">5 pm</p>
                        </div>
                        {ButtonType && <ButtonType />}
                    </div>
                </div>
            </Link>

        </>
    )
}