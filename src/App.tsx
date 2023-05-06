import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

import Home from './pages/home';
import Library from './pages/library';
import Browse from './pages/browse';
import Login from './pages/auth/login';
import Logout from './pages/auth/logout';
import Signup from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgot_password';
import ResendActivation from './pages/auth/resend_activation';
import Activation from './pages/auth/activation';
import ForgotPasswordConfirm from './pages/auth/forgot_password_confirm';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot_password" element={<ForgotPassword />} />
          <Route path="/auth/resend_activation" element={<ResendActivation />} />
          <Route path="/auth/activate/:uid/:token" element={<Activation />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ForgotPasswordConfirm />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Home Display */}
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
