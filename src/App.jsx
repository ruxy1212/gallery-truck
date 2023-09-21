import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-sign-up' element={<Signup />} />
        <Route path='gallery' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;