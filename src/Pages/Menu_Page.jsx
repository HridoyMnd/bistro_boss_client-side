import { Helmet } from "react-helmet";
import Cover_Page from "../Components/Cover_Page";
import Section_Title from "../Components/Section_Title";
import UseMenu from "../Hooks/UseMenu";
import Menu from "../Components/Menu";
import Cover_Page_2 from "../Components/Cover_Page_2";
import Menu_Button from "../Components/Menu_Button";

const Menu_Page = () => {
    const [Offer_Items] = UseMenu();
    const Menu_Items = Offer_Items.filter(item => item.category === "offered");
    const [Dessert_Data] = UseMenu();
    const Dessert_Items = Dessert_Data.filter(item => item.category === "dessert");
    const [Pizza_Data] = UseMenu();
    const Pizza_Items = Pizza_Data.filter(item => item.category === "pizza");
    const [Salad_Data] = UseMenu();
    const Salad_Items = Salad_Data.filter(item => item.category === "salad");
    const [Soup_Data] = UseMenu();
    const Soup_Items = Soup_Data.filter(item => item.category === "salad");


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
            <div>
                <div className="grid grid-cols-2 gap-10 ">
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

                {/* Menu Button */}
                <Menu_Button btn_value={"ORDER YOUR FAVOURITE FOOD"} />
            </div>

            <section className="dessert_section">
                {/* cover_page 2 */}
                <Cover_Page_2 cvr2_bg={"bg-Dessert_back"} cvr2_heading={"DESSERTS"} cvr2_sub_heading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

                {/* dessert Items */}
                <div>
                    <div className="grid grid-cols-2 gap-10 ">
                        {
                            Dessert_Items.map(deser_item => (
                                <Menu key={deser_item._id}
                                    img={deser_item?.image}
                                    h3={deser_item?.name}
                                    p={deser_item?.recipe}
                                    price={deser_item?.price}
                                />
                            ))
                        }
                    </div>

                    {/* Menu Button */}
                    <Menu_Button btn_value={"ORDER YOUR FAVOURITE FOOD"} />
                </div>
            </section>

            {/* Pizza section */}
            <section className="">
                {/* cover_page 2 */}
                <Cover_Page_2 cvr2_bg={"bg-Pizza_back"} cvr2_heading={"PIZZA"} cvr2_sub_heading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

                {/* dessert Items */}
                <div>
                    <div className="grid grid-cols-2 gap-10 ">
                        {
                            Pizza_Items.map(pizza_item => (
                                <Menu key={pizza_item._id}
                                    img={pizza_item?.image}
                                    h3={pizza_item?.name}
                                    p={pizza_item?.recipe}
                                    price={pizza_item?.price}
                                />
                            ))
                        }
                    </div>

                    {/* Menu Button */}
                    <Menu_Button btn_value={"ORDER YOUR FAVOURITE FOOD"} />
                </div>
            </section>

            {/* salad section */}
            <section className="">
                {/* cover_page 2 */}
                <Cover_Page_2 cvr2_bg={"bg-Salad_back"} cvr2_heading={"Salad"} cvr2_sub_heading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

                {/* dessert Items */}
                <div>
                    <div className="grid grid-cols-2 gap-10 ">
                        {
                            Salad_Items.map(salad_item => (
                                <Menu key={salad_item._id}
                                    img={salad_item?.image}
                                    h3={salad_item?.name}
                                    p={salad_item?.recipe}
                                    price={salad_item?.price}
                                />
                            ))
                        }
                    </div>

                    {/* Menu Button */}
                    <Menu_Button btn_value={"ORDER YOUR FAVOURITE FOOD"} />
                </div>
            </section>
            {/* soup section */}
            <section className="">
                {/* cover_page 2 */}
                <Cover_Page_2 cvr2_bg={"bg-Soup_back"} cvr2_heading={"Soup"} cvr2_sub_heading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

                {/* dessert Items */}
                <div>
                    <div className="grid grid-cols-2 gap-10 ">
                        {
                            Soup_Items.map(soup_item => (
                                <Menu key={soup_item._id}
                                    img={soup_item?.image}
                                    h3={soup_item?.name}
                                    p={soup_item?.recipe}
                                    price={soup_item?.price}
                                />
                            ))
                        }
                    </div>

                    {/* Menu Button */}
                    <Menu_Button btn_value={"ORDER YOUR FAVOURITE FOOD"} />
                </div>
            </section>

        </div>
    );
};

export default Menu_Page;