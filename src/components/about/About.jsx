import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white" >
            
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjl3NTIzMmY5MHg1ajh3bWlzand4aXJmdXdpYWtsaGU2djR3NWV5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KDPv1LzlrrMbW3tux5/giphy.gif"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           ABOUT FREE FIRE
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS.
                         It was released on 8 December 2017. It became the most downloaded mobile game globally in 2019 and has 
                         over 1 billion downloads on Google Play Store. In the first quarter of 2021 it was the highest grossing mobile game in the US.
                          In November 2019, it surpassed $1 billion in lifetime revenue.[6] In 2021, Free Fire had surpassed 150 million daily active users.
                           As of February 2024, Free Fire had 100 million active users.[9] In September 2021, Garena released Free Fire Max, 
                        a graphically enhanced version of the game with improved textures, lighting, and sound effects
                        </p>
                        <p className="mt-4 text-gray-600">
                        The Free Fire World Series, the official annual esports competition of the game,
                         became the most watched esports event at the time with over 5.4 million peak live viewers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}