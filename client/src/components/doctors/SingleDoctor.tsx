import { useEffect, useState } from "react";
import { DoctorProps } from "../cards/DoctorCard";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoctor, getSingleDoctor } from "../../services/appApi";
import EditModal from "./EditModal";

const SingleDoctor = () => {
    const [doctor, setDoctor] = useState<DoctorProps>()
    const [loading, setLoading] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const fetchDoctor = async () => {
        setLoading(true)
        try {
            const response = await getSingleDoctor(id)
            console.log(response)
            setDoctor(response.data.doctor)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDoctor()
    }, [editModal])

    const handleModal = (bool: boolean) => {
        setEditModal(bool)
    }

    const handleDeleteModal = async ()=>{
        try {
            const response = await deleteDoctor(id)
            console.log(response)
            navigate('/admin')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-blue-50 flex justify-center w-[100vw] p-5">
            <div className=" bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://pagedone.io/asset/uploads/1705471668.png"
                            alt="User profile"
                            className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Doctor Profile
                            </h3>
                        </div>
                        <div className="cursor-pointer" onClick={() => setEditModal(true)}>

                            <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512">
                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                            </svg>
                        </div>
                        <div className="cursor-pointer" onClick={() => setDeleteModal(true)}>

                            <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512">
                                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Dr {doctor?.name}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600">
                                Specialization
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {doctor?.specialization}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600">
                                Qualification
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {doctor?.qualification}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {doctor?.mobile}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600">
                                Register number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {doctor?.registerNumber}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            {editModal && <EditModal id={id} doctor={doctor} handleModal={handleModal} />}
            {deleteModal && 
              <div
              id="authentication-modal"
              aria-hidden="true"
              className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-slate-50 rounded-lg shadow">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">Are you sure you want to delete?</h3>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="mb-5">
                    
                  
                   
                    <div className="flex justify-end mt-3">
                      <button
                        type="button"
                        className="mx-3 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={() => setDeleteModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleDeleteModal}
                      >
                        Delete Doctor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            }
        </div>
    );
};

export default SingleDoctor