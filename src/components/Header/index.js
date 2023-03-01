import React from 'react';
import logo from '../../Images/logo.svg';
import iconSchedule from '../../Images/schedule.png';
import iconLeaderboard from '../../Images/leaderboard.png';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="l-header">
                
            <div>
                <Link to="/">
                    <img width="110" src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="l-header__nav">

                <Link className="l-header__item" to="/schedule">
                    <img height="25" src={iconSchedule} alt="Icon Schedule" />
                    <span>
                        Schedule
                    </span>    
                </Link>

                <Link className="l-header__item" to="/leaderboard">
                    <img height="25" src={iconLeaderboard} alt="Icon Leaderboard" />
                    <span>
                        Leaderboard
                    </span>    
                </Link>
            </div>
        </header>
    ) 
}   

export default Header;