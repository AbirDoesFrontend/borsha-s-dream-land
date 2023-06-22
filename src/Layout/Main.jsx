import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import './Main.css'

import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;