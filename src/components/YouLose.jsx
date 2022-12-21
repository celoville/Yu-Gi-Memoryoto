import React from 'react'
import '../App.css'


function YouLose({shuffleCards}) {
  return (
    <div className='modal'>
        <div>
            <h4>

        YouLose
            </h4>
        <button className='modal-restart' onClick={shuffleCards}>Let's Duel</button>

        </div>

    </div>
  )
}

export default YouLose