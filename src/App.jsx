import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';
import Header from './components/layout/Header';
import VipPage from './pages/VipPage';
import LoginPage from './pages/LoginPage';
import AuthContext from './store/AuthContext';

export default function App() {
  return (
    <AuthContext.Provider value={'bubleGum'}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/vip' element={<VipPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}
