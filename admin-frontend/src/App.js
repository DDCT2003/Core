import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Navigate  } from 'react-router-dom';
import Login from './Pages/login';
import Dashboard from './Pages/Admin';
import Tienda from './Pages/Tienda';
import Register from './Pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';


function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute requiredRole="Admin" />}>
              <Route path="/admin" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoute requiredRole="User" />}>
              <Route path="/tienda" element={<Tienda />} />
         </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
