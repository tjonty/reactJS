import { useState } from "react";

const newBegining = "1 Jan 2024";

export default function Timer(props) {
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);
    let [seconds, setSeconds] = useState(0);
    const [days, setDays] = useState(0);

    function countdown() {
        const newDate = new Date(newBegining);
        const currentDate = new Date();

        const totalSeconds = (newDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    setInterval(countdown, 1000);

    return (
        <div className="container">
            <h1>
                Timer <span>(To:"1 Jan 2024")</span>
            </h1>
            <p className="time">
                {days} : {hours} : {minutes} : {seconds}
            </p>
        </div>
    );
}
