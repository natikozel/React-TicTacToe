import React from "react";
import {GameBoardCell} from "./GameBoardCell";
import {GameBoardArrayProps} from "./GameBoardArray";

export interface GameBoardRowProps {
    rowIndex: number;
    GameBoardArrayProps: GameBoardArrayProps;
}


export const GameBoardRow = ({...GameBoardRowProps}: GameBoardRowProps): React.JSX.Element => {

    return (
        <ol key={GameBoardRowProps.rowIndex}>
            <GameBoardCell GameBoardRowProps={GameBoardRowProps} colIndex={1}/>
            <GameBoardCell GameBoardRowProps={GameBoardRowProps} colIndex={2}/>
            <GameBoardCell GameBoardRowProps={GameBoardRowProps} colIndex={3}/>

        </ol>
    );
};