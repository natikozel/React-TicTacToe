import {Player, PlayerProps} from "./Player";
import React from "react";

export interface PlayersMenuProps {
    allPlayers: Array<PlayerProps>
    updateAllPlayers: Function
}

export const PlayersMenu = ({allPlayers, updateAllPlayers}: PlayersMenuProps): React.JSX.Element => {


    return (
        <ol className="highlight-player" id="players">
            {allPlayers.map((player: PlayerProps, index: number) =>
                <Player key={index} updateAllPlayers={updateAllPlayers} {...player}/>
            )}
        </ol>);
};

