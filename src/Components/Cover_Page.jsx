
// eslint-disable-next-line react/prop-types
const Cover_Page = ({ cover_heading, cover_sub_heading }) => {
    return (
        <div>
            <div className="bg-black bg-opacity-60 p-20 text-white w-3/4 mx-auto text-center space-y-2 rounded-md">
                <h2 className="text-4xl font-bold">
                    {cover_heading}
                </h2>
                <h3 className="text-base font-medium">
                    {cover_sub_heading}
                </h3>
            </div>
        </div>
    );
};

export default Cover_Page;