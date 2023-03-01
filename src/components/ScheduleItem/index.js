import './style.css';

function ScheduleItem() {
    return (
        <div className="l-schedule__item">
                    
            <div className="l-schedule__item__date-time">
                <p className="l-schedule__item__content">
                    5.5.2022
                </p>

                <p className="l-schedule__item__content">
                    11:50
                </p>
            </div>

            <div className="l-schedule__item__stadim">
                <p className="l-schedule__item__content">
                    Maracanã
                </p>
            </div>

            <div className="l-schedule__item__home-team">
                <p className="l-schedule__item__country">
                    Switzerland
                </p>

                <img width="53" height="37" src="https://flagsapi.codeaid.io/Brazil.png" alt="Icon Brazil"/>
            </div>

            <div className="l-schedule__item__scoreboard">
                <p className="l-schedule__item__goal">
                    1 : 0
                </p>
            </div>

            <div className="l-schedule__item__away-team">
                <img width="53" height="37" src="https://flagsapi.codeaid.io/Serbia.png" alt="Icon Serbia"/>

                <p className="l-schedule__item__country">
                    Serbia
                </p>    
            </div>
        </div>
    );
}

export default ScheduleItem;