import React, { useState } from 'react'

export const Counter = ({turnCount}) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1em', background:'white', borderRadius: '5px', minWidth: '2em', marginLeft: '1em', opacity:'.8',}}>
        <h4 style={{color: '#000', }}>
            
       Turns taken
        </h4>
<div style={{ marginLeft: '1em'}}>

        <h4 style={{color: '#000', }}>
             {turnCount}
        </h4>
</div>
    </div>
  )

} 