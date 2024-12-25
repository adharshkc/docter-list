import { Route, Routes } from "react-router-dom"
import UserPage from "../pages/UserPage"
import DoctorDetailsPage from "../pages/DoctorDetailsPage"


const UserRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<UserPage/>}/>
        <Route path="/doctor/:id" element={<DoctorDetailsPage/>}/>
    </Routes>
  )
}

export default UserRoute