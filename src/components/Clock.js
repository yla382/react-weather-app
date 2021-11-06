import { useEffect, useState } from "react";
import '../styles/Clock.css';

const days = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday'
};

const months = {
    0  : 'Jan',
    1  : 'Feb',
    2  : 'Mar',
    3  : 'Apr',
    4  : 'May',
    5  : 'Jun',
    6  : 'Jul',
    7  : 'Aug',
    8  : 'Sep',
    9  : 'Oct',
    10 : 'Nov',
    11 : 'Dec'
};

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const currentTime = () => {
        setDate(new Date());
    }

    useEffect(() =>{
        const interval = setInterval(() => {
            currentTime();
        }, 1000);
        return  () => clearInterval(interval);
    },[]);


    return (
        <div className="Clock">
            <h3>{days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</h3>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;