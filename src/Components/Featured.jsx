import Section_Title from "./Section_Title";
import Featured_img from '../assets/featured.jpg'

const Featured = () => {
    return (
        <div className="bg-Feature_back bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="bg-black bg-opacity-60 text-gray-300">
                <Section_Title heading={"FROM OUR MENU"} subHeading={"---Check it out---"}>

                </Section_Title>
                <section className="w-3/4 mx-auto flex gap-14 items-center py-20">
                    <div className="w-1/2">
                        <img src={Featured_img} alt="" />
                    </div>
                    <div className="w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold mb-4">Date Likho</h3>
                        <h3 className="text-2xl font-semibold">Where Can I Get Some?</h3>
                        <p className="text-base font-semibold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo delectus ratione, tempore totam aut mollitia nisi nostrum quas dolore.</p>
                        <button className="text-lg  font-semibold border-b-2 px-5 py-2 rounded-lg border-white">
                            Read More
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Featured;