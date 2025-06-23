import './App.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
// import AuthInterceptorInitializer from './interceptor/AuthInterceptorInitializer'


function App() {
  return (
    <AuthProvider>
      {/* <AuthInterceptorInitializer/> */}
     <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
     </Routes>
     </Router>
    </AuthProvider>
  )
}

export default App
