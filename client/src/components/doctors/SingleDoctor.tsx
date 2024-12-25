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
    const token = localStorage.getItem('token')
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
        <div className="min-h-screen bg-blue-50 flex justify-center p-4">
        <div className="bg-white w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <img
                src="https://pagedone.io/asset/uploads/1705471668.png"
                alt="User profile"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Doctor Profile
                </h3>
              </div>
              {token && (
                <div className="flex space-x-4 sm:ml-auto">
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setEditModal(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512">
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                    </svg>
                  </button>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setDeleteModal(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
  
          {/* Details Section */}
          <div className="border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                <dt className="text-sm font-medium text-gray-600">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Dr {doctor?.name}
                </dd>
              </div>
  
              <div className="px-4 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-600">Specialization</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {doctor?.specialization}
                </dd>
              </div>
  
              <div className="px-4 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                <dt className="text-sm font-medium text-gray-600">Qualification</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {doctor?.qualification}
                </dd>
              </div>
  
              {token && (
                <>
                  <div className="px-4 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-600">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {doctor?.mobile}
                    </dd>
                  </div>
  
                  <div className="px-4 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                    <dt className="text-sm font-medium text-gray-600">Register number</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {doctor?.registerNumber}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
  
        {/* Delete Modal */}
        {deleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600 bg-opacity-50">
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Are you sure you want to delete?
                </h3>
                <div className="flex justify-end space-x-3">
                  <button
                    className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={handleDeleteModal}
                  >
                    Delete Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
  
        {editModal && <EditModal id={id} doctor={doctor} handleModal={handleModal} />}
      </div>
    );
};

export default SingleDoctor