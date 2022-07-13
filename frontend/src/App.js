import Login from './components/Auth/Login';
import './App.css'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Register from './components/Auth/Register';
import ProtectRoute from './components/Routes/ProtectRoute';
import Dashboard from './components/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/dashboard" element={<ProtectRoute><Dashboard/></ProtectRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
