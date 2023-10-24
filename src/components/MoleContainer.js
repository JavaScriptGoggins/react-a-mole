// Just one example
import { useState } from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'


function MoleContainer(props){
    const [displayMole, setDisplayMole] = useState(true)
    return (
        <div>
            <h2> Mole Container </h2>
            {displayMole?<Mole setScore={props.setScore} setDisplayMole={setDisplayMole} /> : <EmptySlot setDisplayMole={setDisplayMole} />}
        </div>
    )
}

export default MoleContainer
