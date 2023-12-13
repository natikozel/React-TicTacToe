import {PlayerSymbol} from "./Container";
import {MouseEventHandler} from "react";

interface GameOverProps {
    winner: string;
    onRematch: MouseEventHandler<HTMLButtonElement>;
}

export const GameOver = ({onRematch, winner}: GameOverProps) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{`${winner !== 'Draw' ? `${winner} Won!` : "It's a draw!"}`}</p>
            <p>
                <button onClick={onRematch}>Rematch!</button>
            </p>
        </div>
    );
};