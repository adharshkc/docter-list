import { useState } from "react"

type DoctorModal ={
    handleModal:(bool:boolean)=>void
}

const DoctorModal:React.FC<DoctorModal> = ({handleModal}) => {
    
  return (
    <div
    id="authentication-modal"
    // tabIndex="-1"
    aria-hidden="true"
    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50"
>
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-slate-50 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Add a new Doctor
                </h3>
            </div>
            <div className="p-4 md:p-5">
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                         Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: John Doe"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                         Age
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: 30"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                         Specialization
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: Gastrology"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                         Qualification
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: MBBS"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                         Mobile
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: phone number"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                         Register number
                    </label>
                    <input
                        type="text"
                        name="name"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="eg: Register number"
                        required
                    />
                </div>

                <div className="flex justify-end mt-3">

                    <button
                        type="button"
                        className="   mx-3 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={() => handleModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className=" text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        // onClick={(e) => handleNewProject(e)}
                    >
                        Add Doctor
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DoctorModal