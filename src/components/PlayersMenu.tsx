import {Player} from "./Player";
import React from "react";
import {PlayerSymbol} from "./Container";

export interface PlayersMenuProps {
    currentPlayer: PlayerSymbol,
    onSave: Function
}

export const PlayersMenu = ({onSave, currentPlayer}: PlayersMenuProps): React.JSX.Element => {


    return (
        <ol className="highlight-player" id="players">
            <Player isActive={currentPlayer === 'X'} name="PLAYER1" symbol="X" onSave={onSave}/>
            <Player isActive={currentPlayer === 'O'} name="PLAYER2" symbol="O" onSave={onSave}/>
        </ol>);
};

