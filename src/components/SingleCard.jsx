import React from "react";
import Tilt from "react-tilt";
import './SingleCard.css';

function SingleCard( {card, handleChoice, flipped}) {

    const handleClick = () => {
        handleChoice(card)

    }

    return (
<Tilt option={{max:25}}>
        <div className='card' option >
            <div className={flipped ? 'flipped' : ''}>
                <img src={card.src} className={'front'} alt={"front card"} />
                <img src={"img/cover.png"} className={'back'} alt={"back card"} onClick={handleClick} />
            </div>
        </div>

</Tilt>


    )
}

export default SingleCard