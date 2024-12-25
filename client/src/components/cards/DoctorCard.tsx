import { Link } from "react-router-dom";

export type DoctorProps = {
    name?: string;
    age?: string;
    qualification?: string;
    specialization?: string;
    mobile?:string;
    registerNumber?:string;
    _id?: string;
};

const DoctorCard: React.FC<DoctorProps> = ({ name, qualification, specialization, _id }) => {
    return (
        <div className="w-72 h-72 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://pagedone.io/asset/uploads/1705471668.png"
                    alt={`${name} profile`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">Dr {name}</h5>
                <span className="text-sm text-gray-500">{qualification}</span>
                <span className="text-sm text-gray-500">{specialization}</span>
                <div className="flex mt-4 md:mt-6">
                    <Link
                       to={`/doctor/${_id}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#2f7493] rounded-sm"
                    >
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
