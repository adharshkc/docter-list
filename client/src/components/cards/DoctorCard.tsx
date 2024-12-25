

const DoctorCard = () => {


    return (
        <div className="w-72 h-72 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                <span className="text-sm text-gray-500">MD Gastro</span>
                <span className="text-sm text-gray-500">Emergency medicine</span>
                <div className="flex mt-4 md:mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#2f7493] rounded-sm"
                    >
                        View Profile
                    </a>

                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
