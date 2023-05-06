import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import CircleLoader from 'react-spinners/CircleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import AuthLayout from '@/hocs/AuthLayout';
import logo from '@/assets/logo/boomslagfavicon.png';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const loading = useSelector((state: RootState) => state.auth.loading);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined) {
      // dispatch(login(email, password));
    }
  };

  function redirectToHome() {
    if (typeof window !== 'undefined' && isAuthenticated) {
      navigate('/');
    }
  }

  return (
    <AuthLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />

          <p className="mb-6 pt-8 text-center text-xl font-bold tracking-tight text-dark-txt">
            Forgot Your Password
          </p>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-dark-second" />
            </div>
            <div className="relative flex justify-center" />
          </div>
        </div>

        <div>
          <div className="">
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                  className="text-lg duration block w-full border-2 focus:ring-2 focus:ring-white border-white border-opacity-30 py-3 pl-10 font-regular rounded-lg transition ease-in-out bg-dark-bg bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-30"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                {loading ? (
                  <button
                    type="button"
                    className="text-md focus:ring-none inline-flex 
                    w-full
                    items-center
                    justify-center 
                    border
                    border-dark-bg 
                    bg-dark-primary rounded-2xl text-white
                    px-4 
                    py-3 
                    text-lg 
                    font-bold
                    transition
                    duration-300
                    ease-in-out
                    transform hover:scale-95 "
                  >
                    <CircleLoader loading={loading} size={25} color="#1c1d1f" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="
                    text-md focus:ring-none inline-flex 
                    w-full
                    items-center
                    justify-center 
                    border
                    border-dark-bg 
                    bg-dark-primary rounded-2xl text-white
                    px-4 
                    py-3 
                    text-lg 
                    font-bold
                    transition
                    duration-300
                    ease-in-out
                    transform hover:scale-95 "
                  >
                    SEND EMAIL
                  </button>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Link
                  to="/"
                  type="submit"
                  className="
                    text-md focus:ring-none inline-flex 
                    w-full
                    items-center
                    justify-center 
                    border-2 border-dark-primary rounded-2xl text-white
                    px-4 
                    py-3 
                    text-lg 
                    font-bold
                    transition
                    duration-300
                    ease-in-out
                    transform hover:scale-95 "
                >
                  BACK TO LOGIN
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
