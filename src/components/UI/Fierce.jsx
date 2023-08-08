import Fire from '../../assets/fire.png'
import '../UI/Fierce.css'

function Fierce() {
    return (
    <>
        <div className='fireimage'>
        <img className="fierce" src={Fire} alt="Fire" />
        </div>
        <div className='messages'>
        <h1><span>Faiya!</span> Streak</h1>
        </div>
        <p>Let's be productive</p>
       
    </>
    )
}

export default Fierce