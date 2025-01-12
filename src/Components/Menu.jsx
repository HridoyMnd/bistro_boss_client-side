

const Menu = ({ img, h3, p, price }) => {
    return (
        <div>
            <div className='flex text-center'>
                <div className='w-20 h-16 '>
                    <img src={img} alt="" className='object-fill w-full h-full rounded-r-[200px] rounded-bl-[200px]' />
                </div>
                <div className='text-left ml-2'>
                    <h3 className='text-lg font-semibold'>{h3} </h3>
                    <p className='font-medium text-gray-500 text-base'>{p}</p>
                </div>
                <h3 className='text-base font-semibold text-amber-500'>
                   {price}
                </h3>
            </div>
        </div>
    );
};

export default Menu;
