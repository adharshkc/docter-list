import {  useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { loginUser } from "../../services/appApi"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = async (e: any)=>{
        e.preventDefault()
        if (!email.trim()) return toast.error("Please enter a valid email.")
          if (!password.trim()) return toast.error("Please enter a valid password.")
          try {
            const response = await loginUser(email, password)
            if (response.status === 200) {
              localStorage.setItem("token", response.data.token)
              // setIsAuthenticated(true)
              navigate('/admin')
            } else {
              toast.error("invalid credentials")
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error) {
            console.log(error)
            toast.error("invalid credentials")
          }
    }
  return (
    <>
     <Toaster
        position="top-right"
        reverseOrder={false}
      />
    <div className="flex  w-[100vw] h-screen bg-blue-50"> 

    
    <div className="flex flex-1  flex-col w-fit px-6 lg:mt-44 lg:px-8">
        {/* <div className="bg-white w-fit"> */}

    <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={(event) => handleLogin(event)}
          >
            Sign in
          </button>
        </div>
      </form>

      {/* <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        New Member?{' '}
        <Link to={"/register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
        Create a new Account
        </Link>
        </p> */}
    </div>
    {/* </div> */}

  </div>
  </div>
        </>
  )
}

export default Login