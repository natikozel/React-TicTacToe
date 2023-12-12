import {Turn} from "./Container";
import React from "react";

export interface LogProps {
    gameTurns: Turn[];
}

export const Log = ({gameTurns}: LogProps): React.JSX.Element => {


    return (
        <ol id="log">
            {gameTurns.map((turn: Turn, index: number) =>
                <li key={index}>
                    {`Player ${turn.player.name} ticks ${turn.player.symbol} in row ${turn.square.rowIndex} and column ${turn.square.colIndex}`}
                </li>)
            }
        </ol>
    );
};