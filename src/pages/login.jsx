import { useEffect, useRef , useState} from "react";
import { login } from "../assets/services/auth.service";

function Login() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.userWindow.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        // localStorage.setItem("username", res.username);
        localStorage.setItem("token", res.token);
        window.location.href = "/index";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const userWindowRef = useRef(null);

  useEffect(() => {
    userWindowRef.current.focus();
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/public/assets/images/bank_mayapada.png"
          alt="Bank Mayapada"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="userWindow"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Window
            </label>
            <div className="mt-2">
              <input
                id="userWindow"
                name="userWindow"
                type="text"
                autoComplete="text"
                ref={userWindowRef}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-input"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-input"
              />
            </div>
          </div>
          
          {loginFailed && <p className="text-red-600">{loginFailed}</p>}
          
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
