import React from "react";
import {GameBoardArray} from "./GameBoardArray";
import {PlayerProps} from "./Player";

export interface GameBoardProps {
    curPlayer: PlayerProps,
    onSelect: Function
}

export const GameBoard = ({curPlayer, onSelect} : GameBoardProps) => {

    return (
        <ol id="game-board">
            <GameBoardArray onSelect={onSelect} curPlayer={curPlayer}/>
        </ol>
    );
};