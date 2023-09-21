import '../assets/3dtext.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className="stage">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <div className="absolute bottom-[30%] w-full flex justify-center items-center">
                <Link to="/login" className="text-xl text-blue-500 font-bold ring-2 ring-blue-500 px-4 py-2 hover:text-white hover:bg-blue-500">Get Started</Link>
            </div>
        </>
    )
}

export default LandingPage;