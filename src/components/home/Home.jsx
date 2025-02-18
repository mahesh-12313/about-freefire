import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div 
            className="mx-auto w-full max-w-7xl min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('giphy.gif')" }}
        >
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            <span className="hidden sm:block text-red text-4xl text-red-800  pe-08">PLAY NOW!  <br /> CLICK BELOW</span>
                            
                            <span><h1 className="text-4xl  pe-24" >👇🏻</h1></span>
                        </h2>

                        <a 
                            href="https://play.google.com/pc-store/games/details?id=com.dts.freefiremax"
                            className="inline-flex text-white items-center px-20 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex justify-start pl-10">
    <img 
        className="w-96 h-96 object-cover" 
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmM2cjl4ZjdlZTR5NTFnZHY4OHRpYWVsZ3lxODNmang3dXB3cXNxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/34808GtkRWAoGQuqdZ/giphy.gif" 
        alt="image1" 
    />
</div>


            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img 
                    className="w-96 h-auto sm:w-[500px] sm:h-auto" 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazBtcnA0ZTQxeHVldXlvNmQ4MjVtanBsNGl0dGh6eXJ2aDdkaXEzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/20XFN3vWiU79fBQgBc/giphy.gif" 
                    alt="image2" 
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-black">
            <div className="flex justify-center ">
    <img src="text.gif" alt="" />
</div>

            </h1>
        </div>
    );
}
