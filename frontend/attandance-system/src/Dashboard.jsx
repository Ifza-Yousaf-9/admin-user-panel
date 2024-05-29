import React from 'react';
  import {Routes, Route} from 'react-router-dom'
  import LoginPage from './components/UserPanel/login/LoginPage';
  import SignUp from './components/UserPanel/signup/SignUp';
  import Home from './components/UserPanel/Home/Home';
  import MarkAttandance from './components/UserPanel/MarkAttandance';
    import ViewAttendance from './components/UserPanel/ViewAttandance';
  import EditProfile from './components/UserPanel/EditProfile';
  import MarkLeave from './components/UserPanel/application/MarkLeave';
import AdminLogin from './components/AdminPanel/login/AdminLogin';
import AdminSignup from './components/AdminPanel/signup/SignupAdmin'
import AdminPAnel from './components/AdminPanel/AdminPAnel'
import About from './About'
import Services from './Services'
import Contact from './Contact'

  const Dashboard = () => {
    return (
      <>
  <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
    <Route path='/home' element={<Home />} />
    <Route path='/markleave' element={<MarkLeave />} />
  <Route path='/editprofile' element={<EditProfile />} />
  <Route path='/ViewAttendance' element={<ViewAttendance />} />
  <Route path='/markattandance' element={<MarkAttandance />} />
  <Route path='AdminLogin' element={<AdminLogin />} />
  <Route path='/AdminSignup' element={<AdminSignup />} />
  <Route path='/AdminPAnel' element={<AdminPAnel />} />
  <Route path='/about' element = {<About />}></Route>
  <Route path='/services' element={<Services />} />
  <Route  path='/contact' element ={<Contact />}/>


  </Routes>
      </>
    )
  }

  export default Dashboard
