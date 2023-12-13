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
                    {`${turn.player} selected ${turn.square.rowIndex},${turn.square.colIndex}`}
                </li>)
            }
        </ol>
    );
};