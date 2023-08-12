import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/Home/HomePage';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Pages/NoPage';
import LoginPage from './Pages/Auth/LoginPage';
import NavbarLogin from './Components/Home/NavbaLogin';
// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import PatientPage from './Pages/Patient/PatientPage';
import AddPatientPage from './Pages/Patient/AddPatientPage';
function App() {
  return (
<div>
<NavbarLogin/>
    
      <Routes>
        <Route>
          <Route index  element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="Patient" element={<PatientPage/>} />
          <Route path="AddPatient" element={<AddPatientPage/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </div>
  
  );
}

export default App;
