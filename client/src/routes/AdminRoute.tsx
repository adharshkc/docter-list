import { Routes, Route } from "react-router-dom"
import AdminLogin from "../pages/AdminLogin"
import DoctorDetailsPage from "../pages/DoctorDetailsPage"
import AdminHome from "../pages/AdminHome"
import AdminProtectedRoute from "./AdminProtectedRoute"


const AdminRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route element={<AdminProtectedRoute/>}>
            <Route path="/doctor/:id" element={<DoctorDetailsPage />} />
            <Route path="/" element={<AdminHome />} />
            </Route>
        </Routes>
    )
}

export default AdminRoute