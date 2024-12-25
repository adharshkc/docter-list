
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoute />} />
          <Route path='/admin/*' element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
