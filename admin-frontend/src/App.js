import logo from './logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Login from './Pages/login';
import Dashboard from './Pages/Admin';
import Tienda from './Pages/Tienda';
import Register from './Pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import ClimaTienda from './Pages/ClimaTienda';
import TiendaAdmin from './Pages/TiendaAdmin';
import AdminEditar from './Pages/AdminEditar';
import WFATienda from './Pages/WFATienda';
import AdminColor from './Pages/AdminColor';
import Reporte from './Pages/Reporte';



function App() {
  return (
    <AuthProvider>
      
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute requiredRole="Admin" />}>
            <Route path="/admin" element={<Dashboard />} />
          </Route>

          <Route element={<ProtectedRoute requiredRole="Admin" />}>
          <Route path="/AdminEditar/:id" element={<AdminEditar />} /> 
          </Route>

          <Route element={<ProtectedRoute requiredRole="Admin" />}>
            <Route path="/tiendaAdmin" element={<TiendaAdmin />} />
          </Route>


          <Route element={<ProtectedRoute requiredRole="Admin" />}>
            <Route path="/AdminColor" element={<AdminColor />} />
          </Route>

          <Route element={<ProtectedRoute requiredRole="User" />}>
            <Route path="/tienda" element={<Tienda />} />
          </Route>
         
          <Route element={<ProtectedRoute requiredRole="User" />}>
            <Route path="/tiendaClima" element={<ClimaTienda />} />
          </Route>

          <Route element={<ProtectedRoute requiredRole="User" />}>
            <Route path="/WFATienda" element={<WFATienda />} />
          </Route>
   
   
          <Route element={<ProtectedRoute requiredRole="User" />}>
            <Route path="/reporte" element={<Reporte />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
