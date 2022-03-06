import React from 'react';
import './Main.css';
import Header from './Header';
import BodySection from './BodySection';
import { useLocation  } from 'react-router-dom';

const Main = () =>{
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div className='Main_wrapper'>
            {pathname == '/login' ? <BodySection/> : <>
            <Header/>
            <BodySection/>
            </>}
        </div>
    )
}

export default Main;