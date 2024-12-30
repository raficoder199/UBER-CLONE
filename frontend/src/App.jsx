import Userlogin from './pages/Userlogin';
import Usersignup from './pages/Usersignup';
import Captainlogin from './pages/Captainlogin';
import Captainsignup from './pages/Captainsignup';
import{ Route, Router, Routes} from 'react-router-dom'
import Start from './pages/Start';
import Home from './pages/Home';
import "./App.css";
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/Captain-Home';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding'
import CaptainRiding from './pages/Captain-Riding';


function App() {
  return <>
          <div>
            <Routes>
              <Route path='/' element={<Start/>} />
              <Route path='/login' element={<Userlogin/>} />
              
              <Route path='/signup' element={<Usersignup/>} />
              <Route path='/captain-login' element={<Captainlogin/>} />
              <Route path='/captain-signup' element={<Captainsignup/>} />
              <Route path='/Home' element={
                <UserProtectWrapper>
                  <Home />
                </UserProtectWrapper>

              } />
              
              <Route path='/user/logout' element={
                <UserProtectWrapper>
                  <UserLogout />
                </UserProtectWrapper>

              } />
              <Route path='/captain/logout' element={
                <UserProtectWrapper>
                  <CaptainLogout />
                </UserProtectWrapper>

              } />
               <Route path='/captain-home' element={
                <CaptainProtectWrapper>
                  <CaptainHome />

                </CaptainProtectWrapper>
               

              } />

              <Route path='/ride' element={
              
                  <Riding />
               
                
                } />
              
              <Route path='/captain-ride' element={
              
                  <CaptainRiding />
               
                
                } />
              
              
            </Routes>

          </div>
  </>;
}

export default App;
