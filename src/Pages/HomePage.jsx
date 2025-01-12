import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import Popular_Menu from "../Components/Popular_Menu";
import Testimonial from "../Components/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popular_Menu></Popular_Menu>
            <Featured></Featured>
            <Testimonial/>
        </div>
    );
};

export default HomePage;