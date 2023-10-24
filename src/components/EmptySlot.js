// Just one example
import { useEffect } from 'react'
import moleHill from '../assets/molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        const rand = Math.ceil(Math.random() * 5000)
        const timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, rand)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <img src={moleHill} />
    )
}

export default EmptySlot