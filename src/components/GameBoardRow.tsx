import React from "react";
import {GameBoardCell} from "./GameBoardCell";
import {GameBoardProps} from "./GameBoard";

export interface GameBoardRowProps {
    rowIndex: number;
    GameBoardProps: GameBoardProps;
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