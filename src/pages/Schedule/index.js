import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import './style.css';
import '../../style.css';


function Schedule() {
    const [posts, setMatches] = useState({});
    let countItem = 0;

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/api/v1/getAllMatches', {
                method: 'GET',
                headers: {
                    Authorization: "Bearer YuHBdSlDXY000xa8IlCm7Qgq4_s" 
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setMatches(data.matches)
            })
            .catch((err) => {
                console.log('Message: ', err.message)
            })
        }
        fetchData()
    }, [])

    return (
        <div id="app">

            <Header />
            
            <div className="l-schedule">

                <div className="container">
                    
                    <h1 className="l-schedule__title">
                        League Schedule
                    </h1>

                    <div className="l-schedule__head">
                        <div className="row">
                            <div className="l-schedule__head__date">
                                <p className="l-schedule__head__title">
                                    Date/Time
                                </p>
                            </div>

                            <div className="l-schedule__head__stadim">
                                <p className="l-schedule__head__title">
                                    Stadim
                                </p>
                            </div>

                            <div className="l-schedule__head__home-team">
                                <p className="l-schedule__head__title">
                                    Home Team
                                </p>
                            </div>

                            <div className="l-schedule__head__away-team">
                                <p className="l-schedule__head__title">
                                    Away Team
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="l-schedule__content">

                        {/* loop */}
                        {Object.keys(posts).map(item => {
                            let imageHomeTeam="https://flagsapi.codeaid.io/"+ posts[item].homeTeam + ".png";
                            let imageAwayTeam="https://flagsapi.codeaid.io/"+ posts[item].awayTeam + ".png";
                            let date = new Date(posts[item].matchDate)
                            let dateFormat  = (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
                            let hourFormat = (date.getHours() + 5) + ':' + date.getMinutes();

                            return (             
                                <div className="l-schedule__item" key={countItem++}>
                                    
                                    <div className="l-schedule__item__date-time">
                                        <p className="l-schedule__item__content">
                                            {dateFormat}
                                        </p>

                                        <p className="l-schedule__item__content">
                                            {hourFormat}
                                        </p>
                                    </div>

                                    <div className="l-schedule__item__stadim">
                                        <p className="l-schedule__item__content">
                                            {posts[item].stadium}
                                        </p>
                                    </div>

                                    <div className="l-schedule__item__home-team">
                                        <p className="l-schedule__item__country">
                                            {posts[item].homeTeam}
                                        </p>
                                        {}
                                        <img width="53" height="37" src={imageHomeTeam} alt={posts[item].homeTeam}/>
                                    </div>

                                    <div className="l-schedule__item__scoreboard">
                                        <p className="l-schedule__item__goal">
                                            {posts[item].homeTeamScore} : {posts[item].awayTeamScore}
                                        </p>
                                    </div>

                                    <div className="l-schedule__item__away-team">
                                        <img width="53" height="37" src={imageAwayTeam} alt={posts[item].awayTeam}/>

                                        <p className="l-schedule__item__country">
                                            {posts[item].awayTeam}
                                        </p>    
                                    </div>
                                </div>
                            )
                        })}
                        {/* end loop */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Schedule;