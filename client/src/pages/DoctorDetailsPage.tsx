import SingleDoctor from "../components/doctors/SingleDoctor"
import Navbar from "../components/navbar/Navbar"


const DoctorDetailsPage = () => {
  return (
    <div className="bg-blue-50 h-screen w-[100vw]">
    <Navbar/>
    <SingleDoctor/>
    </div>
  )
}

export default DoctorDetailsPage