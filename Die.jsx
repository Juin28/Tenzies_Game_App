import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Die(props) {
    const styles = {
        color: props.isHeld ? "#8ae429" : "black"
    }
    return (
        <FontAwesomeIcon 
            icon={['fas', `fa-dice-${props.value}`]} 
            className={`die-face ${!props.isHeld && "die-shaking"}`}
            onClick={props.holdDice}
            style={styles}
        />
    )
}