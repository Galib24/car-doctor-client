import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/footer/Footer";
import Navbar from "../pages/Shared/navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;