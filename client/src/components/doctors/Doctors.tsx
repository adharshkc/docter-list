import { useState } from "react";
import DoctorCard from "../cards/DoctorCard"
import DoctorModal from "./DoctorModal";

type Doctors = {
    role: string
}

const Docters: React.FC<Doctors> = ({ role }) => {
    const [isOpenSpecialization, setIsOpenSpecialization] = useState(false);
    const [isOpenQualification, setOpenQualification] = useState(false)
    const [addDoctor, setAddDoctor] = useState(false)

    const toggleDropdown = () => {
        setIsOpenSpecialization(!isOpenSpecialization);
        setOpenQualification(false)
    };

    const toggleDroptwo = ()=>{
        setOpenQualification(!isOpenQualification)
        setIsOpenSpecialization(false)
    }
    return (
        <div className="bg-blue-50 w-[100vw]">
            <div className=" bg-blue-50 flex items-center justify-evenly">
                <div className="flex flex-col lg:flex-row p-5 pt-10  justify-center lg:justify-between items-center text-center space-y-4 lg:space-y-0 lg:space-x-4">
                    {
                        role == 'user' ?
                            <h1 className="text-3xl font-semibold text-gray-800">
                                Expert Health Care Professionals Just a Click Away
                            </h1> :
                            <h1 className="text-3xl font-semibold text-gray-800">
                                Doctors list
                            </h1>
                    }
                </div>
                <div className="float-right mt-3 ">
                    <div>
                        <button onClick={toggleDropdown} className="bg-purple-500 text-white px-4 py-2 mx-5 rounded hover:bg-purple-600">
                            Specialization
                        </button>
                        {isOpenSpecialization && (
                            <div className="absolute  mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                                <ul className="py-1">
                                    <li>
                                        <a
                                            href="#frontend"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Frontend Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#backend"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Backend Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#fullstack"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Fullstack Development
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button onClick={toggleDroptwo} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                            Qualification
                        </button>
                        {isOpenQualification && (
                            <div className="absolute ml-40 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                                <ul className="py-1">
                                    <li>
                                        <a
                                            href="#frontend"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Frontend Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#backend"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Backend Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#fullstack"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Fullstack Development
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {
                            role=='admin'?
                        <button onClick={()=>setAddDoctor(true)} className="bg-purple-500 text-white py-2 px-4 mx-4 rounded hover:bg-purple-600">
                            Add Doctor
                        </button>:""
                        }
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex bg-blue-50 w-[100vw] justify-center mt-5">
                {/* <div className="max-w-4xl mx-auto"> */}
                <div className="grid grid-cols-4 gap-6 p-8 bg-white">


                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    {/* ))} */}
                </div>
                {/* </div> */}
            </div>
            {/* </div> */}
            {addDoctor&&<DoctorModal/>}
        </div>

    )
}

export default Docters