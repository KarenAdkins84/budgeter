import { BrowserRouter, Routes, Route }from 'react-router-dom'
import './App.css';
import Login from './components/Forms/Login';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Forms/Register';
import Navbar from './components/Navbar/Navbar';
import AddTransaction from './components/Forms/AddTransaction';
import AccountDashboard from './components/Dashboard/AccountDashboard';
import AccountDetails from './components/Dashboard/AccountDetails';
import AddAccount from './components/Forms/AddAccount';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-transaction' element={<AddTransaction />} />
        <Route path='/dashboard' element={<AccountDashboard />} />
        <Route path='/account-details/:accountId' element={<AccountDetails />} />
        <Route path='/add-account' element={<AddAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
