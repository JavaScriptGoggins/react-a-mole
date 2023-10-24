import { useEffect } from 'react'
import mole from '../assets/mole.png'

function Mole(props) {

    useEffect(() => {
        const rand = Math.ceil(Math.random() * 5000)
        const timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, rand)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const handleClick = () => {
        props.setDisplayMole(false)

        props.setScore((prevScore) => prevScore + 1)
    }

    return (
        <img onClick={handleClick} src={mole} />
    )
}

export default Mole
