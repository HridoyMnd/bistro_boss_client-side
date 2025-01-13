import Section_Title from './Section_Title';
import Menu from './Menu';
import UseMenu from '../Hooks/UseMenu';
import Menu_Button from './Menu_Button';

const Popular_Menu = () => {
    const [MenuItems] = UseMenu();
    console.log(MenuItems);
    const Popular_Items = MenuItems.filter(item => item.category === "popular")
    return (
        <div>
            <Section_Title heading={"FROM OUR MENU"} subHeading={"---Check it out---"} />
            <section className='grid grid-cols-2 gap-10'>
                {
                    Popular_Items.map(popular_item => (
                        <Menu key={popular_item._id}
                            img={popular_item?.image}
                            h3={popular_item?.name}
                            p={popular_item?.recipe}
                            price={popular_item?.price}
                        />
                    ))
                }

            </section>
            <Menu_Button btn_value={"view full menu"} />

        </div>
    );
};

export default Popular_Menu;