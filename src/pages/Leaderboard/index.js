import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

function Leaderboard() {
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

    let teamsStandings = []
    let teamsHome = [];
    let teamsAway = [];
    let allTeams = [];

    Object.keys(posts).map((element) => {
        teamsHome.push(posts[element].homeTeam);
        teamsAway.push(posts[element].awayTeam);
    })

    let allTeamsAway = [...new Set(teamsAway)];
    allTeams = [...teamsHome, ...allTeamsAway];
    let teams = [...new Set(allTeams)];
    let goalsFor = 0;
    let goalsAgainst = 0;
    let matchPlayedQtd = 0;
    let teamVictory = 0;
    let teamDraw = 0;

    Object.keys(teams).map((team) => {
        let item = {};

        Object.keys(posts).map((element) => {
            if(teams[team] == posts[element].homeTeam && teams[team] != posts[element].awayTeam || teams[team] != posts[element].homeTeam && teams[team] == posts[element].awayTeam) {
                goalsFor = teams[team] == posts[element].homeTeam ? goalsFor + posts[element].homeTeamScore : goalsFor + posts[element].awayTeamScore;
                goalsAgainst = teams[team] == posts[element].homeTeam ? goalsAgainst + posts[element].awayTeamScore : goalsAgainst + posts[element].homeTeamScore;
                matchPlayedQtd = posts[element].matchPlayed == true ? matchPlayedQtd + 1 : 0;
                teamVictory = teams[team] == posts[element].homeTeam ? posts[element].homeTeamScore > posts[element].awayTeamScore ? teamVictory + 3 : teamVictory + 0 : posts[element].homeTeamScore < posts[element].awayTeamScore ? teamVictory + 3 : teamVictory + 0;
                teamDraw = posts[element].homeTeamScore == posts[element].awayTeamScore ? teamDraw + 1 : teamDraw + 0;
                item['team'] = teams[team];
                item['goalsFor'] = goalsFor;
                item['goalsAgainst'] = goalsAgainst;
                item['matchPlayed'] = matchPlayedQtd;
                item['teamVictory'] = teamVictory;
                item['teamDraw'] = teamDraw;
                item['points'] = teamVictory + teamDraw;
                item['goalDifference'] = goalsFor - goalsAgainst;
            }
        })

        teamsStandings.push(item);
        goalsFor = 0;
        goalsAgainst = 0;
        matchPlayedQtd = 0;
        teamVictory = 0;
        teamDraw = 0;
    })

    teamsStandings = teamsStandings.sort((a, b) => {
        if(a.points > b.points) {
            return -1;
        }
    });

    return (
        <div id="app">
            <Header />

            <div className="l-schedule">

                <div className="container">
                    
                    <h1 className="l-schedule__title">
                        League Standings
                    </h1>

                    <div className="l-schedule__head">
                        <div className="row">
                            <div className="l-leaderboard__head__team-name">
                                <p className="l-leaderboard__head__title">
                                    Team Name
                                </p>
                            </div>

                            <div className="l-leaderboard__head__goals">
                                <p className="l-leaderboard__head__title l-leaderboard__head__title--center">
                                    MP
                                </p>
                            </div>

                            <div className="l-leaderboard__head__goals l-leaderboard__head__goals--gf">
                                <p className="l-leaderboard__head__title l-leaderboard__head__title--center">
                                    GF
                                </p>
                            </div>

                            <div className="l-leaderboard__head__goals l-leaderboard__head__goals--ga">
                                <p className="l-leaderboard__head__title l-leaderboard__head__title--center">
                                    GA
                                </p>
                            </div>

                            <div className="l-leaderboard__head__goals l-leaderboard__head__goals--gd">
                                <p className="l-leaderboard__head__title l-leaderboard__head__title--center">
                                    GD
                                </p>
                            </div>

                            <div className="l-leaderboard__head__points">
                                <p className="l-leaderboard__head__title l-leaderboard__head__title--center">
                                    Points
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="l-schedule__content">

                        {/* loop */}
                        {teamsStandings.map((item) => {
                            let teamFlag="https://flagsapi.codeaid.io/"+ item.team + ".png";
                            
                            return (
                                <div className="l-leaderboard__item" key={countItem++}>

                                    <div className="l-leaderboard__item__team-name">
                                        <img width="53" height="37" src={teamFlag} alt={item.team} />

                                        <p className="l-leaderboard__item__country">
                                            {item.team}
                                        </p>
                                    </div>

                                    <div className="l-leaderboard__item__goals">
                                        <p className="l-leaderboard__item__content">
                                            {item.matchPlayed}
                                        </p>
                                    </div>

                                    <div className="l-leaderboard__item__goals l-leaderboard__item__goals--gf">
                                        <p className="l-leaderboard__item__content">
                                            {item.goalsFor}
                                        </p>
                                    </div>

                                    <div className="l-leaderboard__item__goals l-leaderboard__item__goals--ga">
                                        <p className="l-leaderboard__item__content">
                                            {item.goalsAgainst}
                                        </p>
                                    </div>

                                    <div className="l-leaderboard__item__goals l-leaderboard__item__goals--gd">
                                        <p className="l-leaderboard__item__content">
                                            {item.goalDifference}
                                        </p>
                                    </div>

                                    <div className="l-leaderboard__item__points">
                                        <p className="l-leaderboard__item__content l-leaderboard__item__content--points">
                                            {item.points}
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

export default Leaderboard;