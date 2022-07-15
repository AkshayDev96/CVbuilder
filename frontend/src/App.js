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
import CVLayout from './components/CVLayout'
import Editor from './components/Editor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/dashboard" element={<ProtectRoute><Dashboard/></ProtectRoute>} />
        <Route  path="/layout" element={<ProtectRoute><CVLayout/></ProtectRoute>} />
        <Route  path="/edit" element={<ProtectRoute><Editor/></ProtectRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
