import React from "react";
import {GameBoardArray} from "./GameBoardArray";
import {PlayerSymbol} from "./Container";

export interface GameBoardProps {
    gameBoard: PlayerSymbol[][],
    onSelect: Function,
}

export const GameBoard = ({gameBoard, onSelect} : GameBoardProps) => {

    return (
        <ol id="game-board">
            <GameBoardArray onSelect={onSelect} gameBoard={gameBoard}/>
        </ol>
    );
};