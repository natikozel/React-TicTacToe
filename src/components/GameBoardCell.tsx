import React from "react";
import {GameBoardRowProps} from "./GameBoardRow";

export interface CellProps {
    GameBoardRowProps: GameBoardRowProps,
    colIndex: number,
}

export const GameBoardCell = ({GameBoardRowProps, colIndex}: CellProps): React.JSX.Element => {

    const row: number = GameBoardRowProps.rowIndex;

    const elementClickHandler = (e: any): void => {
        GameBoardRowProps.GameBoardProps!.onSelect!(GameBoardRowProps.rowIndex, colIndex);
    };


    return (
        <li key={`${GameBoardRowProps.rowIndex}${colIndex}`}>
            <button onClick={elementClickHandler}
                    disabled={!!GameBoardRowProps.GameBoardProps.gameBoard[row][colIndex]}>{GameBoardRowProps.GameBoardProps.gameBoard[row][colIndex]}</button>
        </li>
    );
};