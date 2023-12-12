import {Player} from "./Player";
import React from "react";
import {GameBoardProps} from "./Container"



export const PlayersMenu = ({curPlayer}: GameBoardProps): React.JSX.Element => {


    return (
            <ol className="highlight-player" id="players">
                <Player isActive={curPlayer === 'X'} name={"Player1"} symbol={"X"}/>
                <Player isActive={curPlayer === 'O'} name={"Player2"} symbol={"O"}/>
            </ol>);
};

