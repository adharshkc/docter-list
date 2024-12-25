import Doctors from "../components/doctors/Doctors"
import Navbar from "../components/navbar/Navbar"


const UserPage = () => {
  return (
    <div className="max-w-screen-xl">
        <Navbar/>
        <Doctors role="user"/>
    </div>
  )
}

export default UserPage