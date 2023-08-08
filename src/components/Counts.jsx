import React, { useState } from "react";
import '../components/Counts.css'
import Confetti from 'react-confetti'

function Counts() {
    const [count, setCount] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false)

    const handleClick = () => {
        setCount(count + 1);
        setShowConfetti(true);

        setTimeout(() => {
            setShowConfetti(false);
        }, 3000);
    }

    return (
        <div className="Buttonstyle">
            <button type="button" onClick={handleClick}>Tasks done today <span>{count}</span></button>
            {showConfetti && <Confetti />}
        </div>
    )
}

export default Counts;