export default function Die(prop){

    return (
        <button 
            className={prop.isHeld? "held": ""}
            onClick={() => prop.hold(prop.id)}
            aria-pressed = {prop.isHeld}
            aria-label={`Die with a value of ${prop.value} , ${prop.isHeld? "held" : "not held"}`}
        >
            {prop.value}
        </button>
    )
}