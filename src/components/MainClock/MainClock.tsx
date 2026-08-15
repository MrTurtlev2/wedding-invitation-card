import * as React from "react";
import {useEffect, useState} from "react";
import './MainClock.css'
import {getTimeRemaining} from "../../utils/timeUtil.ts";
import AnimatedNumber from "./elements/AnimatedNumber.tsx";

const MainClock: React.FC = () => {
    const targetDate = new Date(2027, 8, 5)

    const [time, setTime] = useState(() => getTimeRemaining(targetDate))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeRemaining(targetDate))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='main-wrapper'>
            <div className='text-wrapper'>
                <p className='text-4xl'>LAKE COMO</p>
                <p className='text-2xl mb-5'>WEDDING WEEKEND</p>
                <p className='text-base'>4-7 sierpnia 2027•WŁOCHY</p>
            </div>
            <div className='date-wrapper'>
                <AnimatedNumber value={time.days} label="DNI"/>

                <div className="date-separator"/>

                <AnimatedNumber value={time.hours} label="GODZIN"/>

                <div className="date-separator"/>

                <AnimatedNumber value={time.minutes} label="MINUT"/>

                <div className="date-separator"/>

                <AnimatedNumber value={time.seconds} label="SEKUND"/>
            </div>
        </div>
    )
}
export default MainClock;

