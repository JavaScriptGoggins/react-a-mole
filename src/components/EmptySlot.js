// Just one example
import { useEffect } from 'react'
import moleHill from '../assets/molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        setTimeout(() => {
            props.setDisplayMole(true)
        }, 5000)
    }, [])

    return (
        <img src={moleHill} />
    )
}

export default EmptySlot