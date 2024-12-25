/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import DoctorCard, { DoctorProps } from "../cards/DoctorCard";
import DoctorModal from "./DoctorModal";
import { getDoctors } from "../../services/appApi";
import { PuffLoader } from "react-spinners";

type Doctors = {
    role: string;
};

const getSpecializations = (doctors: any[]) =>
    [...new Set(doctors.map(item => item.specialization))];
const getQualifications = (doctors: any[]) =>
    [...new Set(doctors.map(item => item.qualification))];

const Doctors: React.FC<Doctors> = ({ role }) => {
    const [isOpenSpecialization, setIsOpenSpecialization] = useState(false);
    const [isOpenQualification, setOpenQualification] = useState(false);
    const [specializations, setSpecializations] = useState<string[]>([]);
    const [qualifications, setQualifications] = useState<string[]>([]);
    const [addDoctor, setAddDoctor] = useState(false);
    const [doctors, setDoctors] = useState<DoctorProps[]>([]);
    const [filteredDoctors, setFilteredDoctors] = useState<DoctorProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchDoctors = async () => {
        setLoading(true);
        try {
            const response = await getDoctors();
            setDoctors(response.data.doctors);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.error(error.response.data);
        }
    };

    useEffect(() => {
        if (doctors.length > 0) {
            setQualifications(getQualifications(doctors));
            setSpecializations(getSpecializations(doctors));
            setFilteredDoctors(doctors); 
        }
    }, [doctors]);

    useEffect(() => {
        fetchDoctors();
    }, [addDoctor]);

    const toggleDropdown = () => {
        setIsOpenSpecialization(!isOpenSpecialization);
        setOpenQualification(false);
    };

    const toggleDroptwo = () => {
        setOpenQualification(!isOpenQualification);
        setIsOpenSpecialization(false);
    };

    const handleQualificationFilter = (qualification: string) => {
        const filtered = doctors.filter(doctor =>
            doctor?.qualification?.includes(qualification)
        );
        setFilteredDoctors(filtered);
        setOpenQualification(false); // Close the dropdown after selection
    };

    const handleSpecializationFilter = (specialization: string) => {
        const filtered = doctors.filter(doctor =>
            doctor?.specialization?.includes(specialization)
        );
        setFilteredDoctors(filtered);
        setIsOpenSpecialization(false); 
    };

    const handleClearFilter = () => {
        setFilteredDoctors(doctors); 
        setIsOpenSpecialization(false);
        setOpenQualification(false);
    };

    const handleModal = (bool: boolean) => {
        setAddDoctor(bool);
    };

    if (loading) {
        return (
            <div className="min-h-screen p-8">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <PuffLoader />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-blue-50 w-[100vw]">
            <div className="bg-blue-50 flex items-center justify-evenly">
                <div className="flex flex-col lg:flex-row p-5 pt-10 justify-center lg:justify-between items-center text-center space-y-4 lg:space-y-0 lg:space-x-4">
                    {role === "user" ? (
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Expert Health Care Professionals Just a Click Away
                        </h1>
                    ) : (
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Doctors List
                        </h1>
                    )}
                </div>
                <div className="float-right mt-3">
                    <div>
                        <button
                            onClick={toggleDropdown}
                            className="bg-purple-500 text-white px-4 py-2 mx-5 rounded hover:bg-purple-600"
                        >
                            Specialization
                        </button>
                        {isOpenSpecialization && (
                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                                <ul className="py-1">
                                    {specializations.map(item => (
                                        <li
                                            key={item}
                                            onClick={() => handleSpecializationFilter(item)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button
                            onClick={toggleDroptwo}
                            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                        >
                            Qualification
                        </button>
                        {isOpenQualification && (
                            <div className="absolute ml-40 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                                <ul className="py-1">
                                    {qualifications.map(item => (
                                        <li
                                            key={item}
                                            onClick={() => handleQualificationFilter(item)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button
                            onClick={handleClearFilter}
                            className="  py-2 px-4 mx-4 rounded hover:bg-slate-200"
                        >
                            Clear Filter
                        </button>
                        {role === "admin" && (
                            <button
                                onClick={() => setAddDoctor(true)}
                                className="bg-purple-500 text-white py-2 px-4 mx-4 rounded hover:bg-purple-600"
                            >
                                Add Doctor
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex bg-blue-50 w-[100vw] justify-center mt-5">
                <div className="grid grid-cols-4 gap-6 p-8 bg-white">
                    {filteredDoctors && filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor: DoctorProps) => (
                            <DoctorCard
                                key={doctor._id}
                                name={doctor.name}
                                age={doctor.age}
                                qualification={doctor.qualification}
                                specialization={doctor.specialization}
                                _id={doctor._id}
                            />
                        ))
                    ) : (
                        <p className="text-gray-700 text-center col-span-4">
                            No doctors available.
                        </p>
                    )}
                </div>
            </div>
            {addDoctor && <DoctorModal handleModal={handleModal} />}
        </div>
    );
};

export default Doctors;
