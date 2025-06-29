import Nav from "@/pages/Nav";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Home;