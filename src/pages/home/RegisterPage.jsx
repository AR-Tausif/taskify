import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import { ToastContainer, toast } from "react-toastify"


const Register = () => {
  const {joinWithGoogle, joinWithGmail} = useContext(AuthContext)
  
  const handleGoogleAuthRegister = () =>{
    joinWithGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      toast(' Wow you are signed in!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
  
  }

  const handleRegister =(event)=>{
    event.preventDefault()
    const form = event.target;
    
    const name = form.user_name.value;
    const email = form.user_email.value;
    const password = form.user_password.value;
    joinWithGmail(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      toast(' Wow you are signed in!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        console.log(user)
        location("/")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
      // ..
    });

    const user = {
      name: name,
      email: email,
      password: password,
    }
  
  }
  return (

    <div className="flex w-screen flex-wrap text-slate-800">
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      /> 
    <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
      <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
          New Feature
        </span>
        <p className="my-6 text-3xl font-semibold leading-10">
          Create your all tasks with{" "}
          <span className="mx-auto block w-64 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
            make from scratch
          </span>
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          necessitatibus nostrum repellendus ab totam.
        </p>
        <a
          href="#"
          className="font-semibold tracking-wide text-white underline underline-offset-4"
        >
          Learn More
        </a>
      </div>
      {/* <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> */}
    </div>
    <div className="flex w-full flex-col md:w-1/2">
      <div className="flex justify-center pt-12 md:justify-start md:pl-12">
        <a href="#" className="text-2xl font-bold text-blue-600">
          {" "}
          TASKIFY .{" "}
        </a>
      </div>
      <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
        <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
          Create your free account
        </p>
        <p className="mt-6 text-center font-medium md:text-left">
          Already using Taskify?
          <NavLink to="/signin" className="whitespace-nowrap font-semibold text-blue-700">
            Login here
          </NavLink>
        </p>
        <button onClick={handleGoogleAuthRegister} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
          <img
            className="mr-2 h-5"
            src="/images/-9jfz8JJkYKu0yDYmD5WM.svg"
            alt=""
          />{" "}
          Get started with Google
        </button>
        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
          <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
            Or use email instead
          </div>
        </div>
        <form onSubmit={handleRegister} className="flex flex-col items-stretch pt-3 md:pt-8">
          <div className="flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="text"
                name="user_name"
                id="login-name"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="email"
                name="user_email"
                id="login-email"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                name="user_password"
                id="login-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Password (minimum 8 characters)"
              />
            </div>
          </div>
          <div className="block">
            <input
              className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
              type="checkbox"
              id="remember-me"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3e%3cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10l3 3l6-6"/%3e%3c/svg%3e")'
              }}
              defaultChecked=""
            />
            <label className="inline-block" htmlFor="remember-me">
              {" "}
              I agree to the{" "}
              <a className="underline" href="#">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default Register