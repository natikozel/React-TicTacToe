import {PlayerSymbol} from "./Container";
import React, {useState} from "react";
import {GameBoardRowProps} from "./GameBoardRow";

export interface CellProps {
    GameBoardRowProps: GameBoardRowProps,
    colIndex: number,
}

export const GameBoardCell = ({...CellProps} : CellProps): React.JSX.Element => {
    const [cell, setCell]
        : [PlayerSymbol, React.Dispatch<React.SetStateAction<PlayerSymbol>>]
        = useState(null as unknown as PlayerSymbol);


    const elementClickHandler = (): void => {
        setCell((prevCell: PlayerSymbol): PlayerSymbol => CellProps.GameBoardRowProps.GameBoardArrayProps.curPlayer);
        CellProps.GameBoardRowProps.GameBoardArrayProps.onSelect!();

    };

    return (
        <li key={`${CellProps.GameBoardRowProps.rowIndex}${CellProps.colIndex}`}>
            <button onClick={elementClickHandler}>{cell}</button>
        </li>
    );
};