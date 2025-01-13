

// eslint-disable-next-line react/prop-types
const Menu_Button = ({btn_value}) => {
    return (
        <button className='uppercase text-lg font-semibold border-b-2 rounded-lg border-black block mx-auto px-5 py-2 my-4'>
           {btn_value}
        </button>
    );
};

export default Menu_Button;