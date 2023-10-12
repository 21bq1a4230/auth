
import './App.css';
import Login from "./Component/Login/Login"
import Welcome from "./Component/Welcome/Welcome"
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PrivateRoutes from './Utils/ProtectedRoutes';
import { AuthProvider } from './Utils/AuthProvider';

const App = () =>{

    return (
      <BrowserRouter basename='/'>
        <div className='App'>
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route element={<PrivateRoutes/>}>
                  <Route path='/welcome' element={<Welcome/>}/>
                  <Route path='/home' element={<Home/>}/>
                </Route>
              </Routes> 
            </AuthProvider>
        </div>
      </BrowserRouter>
    );
  }

export default App;
