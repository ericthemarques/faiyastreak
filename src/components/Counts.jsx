import { useState } from "react"
import '../components/Counts.css'

function Counts() {
    const [count, setCount] = useState(0);
    return (
        <div className="Buttonstyle">
            <button type="button" onClick={() => setCount(count + 1)}>Tasks done today <span>{count}</span></button>
        </div>
    )
}

export default Counts