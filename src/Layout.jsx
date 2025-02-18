import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
// import Getstarted from "./components/get started/Getstarted"; 





function layout(){
return (
<>
<Header />

<Outlet />

<Footer />

{/* <Getstarted/> */}






</>

)


}
export default layout