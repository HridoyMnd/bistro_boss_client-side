import { Helmet } from "react-helmet";
import Cover_Page from "../Components/Cover_Page";
import Section_Title from "../Components/Section_Title";
import UseMenu from "../Hooks/UseMenu";
import Menu from "../Components/Menu";

const Menu_Page = () => {
    const [Offer_Items] = UseMenu();
    const Menu_Items = Offer_Items.filter(item => item.category === "offered");


    return (
        <div>

            {/* Menu header */}
            <div className="bg-Contact_back bg-center bg-no-repeat bg-cover py-28">
                <Helmet>
                    <title>Menu | Page</title>
                </Helmet>
                <Cover_Page cover_heading={"OUR MENU"} cover_sub_heading={"Would you like to try a dish?"} />
            </div>

            {/*Section_Title */}
            <Section_Title heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"} />

            {/* Menu Component */}
            <div className="grid grid-cols-2 gap-10">
                {
                    Menu_Items.map(menu_item => (
                        <Menu key={menu_item._id}
                            img={menu_item?.image}
                            h3={menu_item?.name}
                            p={menu_item?.recipe}
                            price={menu_item?.price}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Menu_Page;