import React from "react";
import { Link } from "react-router-dom"; 

const Getstarted = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 text-center">
            <p className="text-lg mt-4">Join Free Fire India and dive into the ultimate battle royale experience.</p>
            
            <div className="mt-6 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">Why Join?</h2>
                <ul className="text-gray-400 mt-3 text-left list-disc list-inside">
                    <li>Fast-paced 10-minute matches</li>
                    <li>Exclusive in-game events and rewards</li>
                    <li>Competitive tournaments with real prizes</li>
                    <li>Massive community of players</li>
                </ul>
                
                <Link to="/Signup">
                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg">
                        Sign Up Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Getstarted;
