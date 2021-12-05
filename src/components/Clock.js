import { useEffect, useCallback  } from "react";
import '../styles/Clock.css';
import {days, months} from "../consts"


const Clock = ({date, setDate}) => {
    // const [date, setDate] = useState(new Date());

    const currentTime = useCallback(() => {
        setDate(new Date());
    }, [setDate]);

    useEffect(() =>{
        const interval = setInterval(() => {
            currentTime();
        }, 1000);
        return  () => clearInterval(interval);
    },[currentTime]);


    return (
        <div className="Clock">
            <h3>{days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</h3>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;