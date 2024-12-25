import { Route, Routes } from "react-router-dom"
import UserPage from "../pages/UserPage"


const UserRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<UserPage/>}/>
    </Routes>
  )
}

export default UserRoute