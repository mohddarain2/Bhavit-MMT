import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import MMT from '../../Logo/MMTLogo.png';
import Flight from '../../Logo/flight.svg';
import Hotels from '../../Logo/hotels.svg';
import Train from '../../Logo/trn.png';
import SignUp from '../SignUP/SignUp'
import LogOutModal from './LogOutModal';
import { DataParentContext } from '../App';

import { Link } from 'react-router-dom';
const Navbar = () => {
    const [modalBtn, setModalBtn] = useState(false)
    const localContext = useContext(DataParentContext);
    const onOff = () => {
        setModalBtn(true)
        //console.log("darain")
    }
    useEffect(() => {
        console.log(modalBtn)
    })
    return (
        <div className='NavbarContainer'>
            <div className="logo">
                <Link to="">
                    <img src={MMT} alt="MMT-Logo" />
                </Link>
            </div>
            <Link className="navlinks" to="/"><img id="dd" src={Flight} alt="Flight-logo" />Flights</Link>
            <Link className="navlinks" to="/hotels"><img src={Hotels} alt="Hotels-logo" />Hotels</Link>
            <Link className="navlinks" to="/trains"><img src={Train} alt="Train-logo" />Trains</Link>


            <div className='DashboardPortal'>
                {localContext.LoginDetails.length > 0 ? <><button className='btn-btn' onClick={() => onOff()}>
                    {"Hi " + localContext.LoginDetails[0].userName}
                </button>
                    {
                        modalBtn && <LogOutModal setModalBtn={setModalBtn} />

                    } 
                    </> : <Link className="navlinks" to="/login">Log In</Link>}

            </div>
        </div>
    )
}

export default Navbar