import React, {useState} from 'react';
import './card.css'

const script = [
    "I don't want to be around anymore.",
    "Oh, my God. I don't even look like myself.",
    "Oh, my God. This guy sucks.",
    "There's too much fucking shit on me.",
    "I'm so hot!",
    "We did way too much.",
    "I'm gonna rip the fucking head off!",
    "I can't see shit out the sides of my eye!",
    "I'm taking the chin off. It kills.",
    "The prank is that there is a real guy in here.",
    "I'm not doing it."
]

function Card() {  

    const [quote,setQuote] = useState(script[0]);  
    
    const newQuote =()=> {
        let  randNum = Math.floor(Math.random()* script.length)
        setQuote(script[randNum])
    }
   
        return (
            <div className="card-container">
                <div className="quote-container">
                    <div className="quote">
                        <p>{quote}</p>
                    </div>
                </div>
                
                <div className="btn-container">
                    <button className="btn" onClick={newQuote}>Tickle-Me-Havoc</button>
                </div>
            </div>
        );   
}

export default Card