import { Routes, Route } from "react-router-dom"
import AdminLogin from "../pages/AdminLogin"
import DoctorDetailsPage from "../pages/DoctorDetailsPage"
import AdminHome from "../pages/AdminHome"


const AdminRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/doctor/" element={<DoctorDetailsPage />} />
            <Route path="/" element={<AdminHome />} />
        </Routes>
    )
}

export default AdminRoute