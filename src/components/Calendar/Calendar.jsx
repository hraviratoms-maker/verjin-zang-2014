import './calendar.css';

const Calendar = () => {
    let calendarData = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31]
    ];

    return (
        <div className="calendar">
            <h4>Մայիս</h4>

            <div className="calendarBox">
                {
                    calendarData.map((el, idx) => (
                        <div className="tr" key={idx}>
                            {
                                el.map((item, i) => (
                                    <div className="num" key={i}>{item === 22 ? <span className="anim">{item}</span> : item}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

            <div className="time">
                <p>13:00</p>

                <button>Քարտեզ</button>
            </div>
        </div>
    );
}

export default Calendar;