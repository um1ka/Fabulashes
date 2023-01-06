import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import LookBook  from './LookBook';
import Gallery from './Gallery';
import Appointment from './Appointment';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import Nav from './Nav';

function Main(props) {
    return (
        <div className='main'>
            <Routes>
                <Route exact path='about' element={<About/>}/>
                <Route exact path='lookbook' element={<LookBook/>}/>
                <Route exact path='gallery' element={<Gallery/>}/>
                <Route exact path='appointment' element={<Appointment/>}/>
                <Route exact path='signup' element={<Signup/>}/>
                <Route exact path='login' element={<Login/>}/>
                <Route exact path='logout' element={<Logout/>}/>
                <Route exact path='nav' element={<Nav/>}/>
            </Routes>
        </div>
    );
}

export default Main;