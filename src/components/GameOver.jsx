export default function GameOver( {winner, onSelectRestart} ) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={onSelectRestart}>Restart</button>
            </p>
        </div>
    );
}