

// eslint-disable-next-line react/prop-types
const Cover_Page_2 = ({ cvr2_bg,  cvr2_heading, cvr2_sub_heading }) => {
    return (
        <div className={`bg-center bg-no-repeat bg-cover py-20 ${cvr2_bg}`}>
            <div className="bg-black bg-opacity-45 p-20 text-white w-3/4 mx-auto text-center space-y-2 rounded-md">
                <h2 className="text-4xl font-bold">
                    {cvr2_heading}
                </h2>
                <h3 className="text-base font-medium">
                    {cvr2_sub_heading}
                </h3>
            </div>
        </div>
    );
};

export default Cover_Page_2;