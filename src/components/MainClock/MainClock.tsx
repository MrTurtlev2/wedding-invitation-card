import * as React from "react";
import './MainClock.css'
import {getTimeRemaining} from "../../utils/timeUtil.ts";

const MainClock: React.FC = () => {

    const {days, hours, minutes, seconds} = getTimeRemaining(1, 4, 2027)

    return (
        <div className='main-wrapper'>
            <div className='text-wrapper'>
                <p className='text-4xl'>LAKE COMO</p>
                <p className='text-2xl mb-5'>WEDDING WEEKEND</p>
                <p className='text-base'>4-7 sierpnia 2027•WŁOCHY</p>
            </div>
            <div className='date-wrapper'>
                <div className='date-cell'>
                    <p className='text-2xl'>{days}</p>
                    <p className='text-base'>DNI</p>
                </div>
                <div className='date-separator'/>
                <div className='date-cell'>
                    <p className='text-2xl'>{hours}</p>
                    <p className='text-base'>GODZIN</p>
                </div>
                <div className='date-separator'/>

                <div className='date-cell'>
                    <p className='text-2xl'>{minutes}</p>
                    <p className='text-base'>MINUT</p>
                </div>
                <div className='date-separator'/>
                <div className='date-cell'>
                    <p className='text-2xl'>{seconds}</p>
                    <p className='text-base'>SEKUND</p>
                </div>
            </div>
        </div>
    )
}
export default MainClock;

