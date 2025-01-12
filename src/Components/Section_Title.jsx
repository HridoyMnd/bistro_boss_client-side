
const Section_Title = ({heading, subHeading}) => {
    return (
        <div className=" my-8 text-center space-y-2 w-1/4 mx-auto">
            <h4 className="text-lg font-medium text-amber-500">
                {subHeading}
                <hr className="border-b-[1px] mt-4 border-gray-300" />
            </h4>
            <h2 className="text-3xl font-bold uppercase">
                {heading}
                <hr className="border-b-[1px] mt-4 border-gray-300" />
                
            </h2>
        </div>
    );
};

export default Section_Title;