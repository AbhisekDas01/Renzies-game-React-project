export default function GameWon(prop){
    
    console.log();
    
    return (
        <section className="game-won">
            <h1>🎊congrats🎊</h1>
            <h3>You have completed in <strong>{prop.diceRolled.current}</strong> Rolls</h3>
        </section>
    )
}