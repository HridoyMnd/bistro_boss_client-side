import Section_Title from './Section_Title';
import img_1 from '../assets/pizza-bg.jpg';
import img_2 from '../assets/salad-bg.jpg';
import img_3 from '../assets/soup-bg.jpg';
import Menu from './Menu';

const Popular_Menu = () => {
    return (
        <div>
            <Section_Title heading={"FROM OUR MENU"} subHeading={"---Check it out---"}/>

            <section className='grid grid-cols-2 gap-10'>
            <Menu
                img={img_1}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            <Menu
                img={img_2}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            <Menu
                img={img_3}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            <Menu
                img={img_3}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            <Menu
                img={img_3}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            <Menu
                img={img_3}
                h3={"ROAST DUCK BREAST ------------------"}
                p={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}
                price= {"$14.5"}
            />
            </section>
            <button className='uppercase text-lg font-semibold border-b-2 rounded-lg border-black block mx-auto px-5 py-2 my-4'>
                View Full Menu
            </button>
        </div>
    );
};

export default Popular_Menu;