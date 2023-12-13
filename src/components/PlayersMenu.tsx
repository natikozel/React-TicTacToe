import {Player} from "./Player";
import React from "react";
import {PlayerSymbol} from "./Container";

export interface PlayersMenuProps {
    currentPlayer: PlayerSymbol
}

export const PlayersMenu = ({currentPlayer}: PlayersMenuProps): React.JSX.Element => {


    return (
        <ol className="highlight-player" id="players">
            <Player isActive={currentPlayer === 'X'} name="PLAYER1" symbol="X"/>
            <Player isActive={currentPlayer === 'O'} name="PLAYER2" symbol="O"/>
        </ol>);
};

