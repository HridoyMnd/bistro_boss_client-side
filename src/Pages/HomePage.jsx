import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import Popular_Menu from "../Components/Popular_Menu";
import Testimonial from "../Components/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Page</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popular_Menu></Popular_Menu>
            <Featured></Featured>
            <Testimonial/>
        </div>
    );
};

export default HomePage;