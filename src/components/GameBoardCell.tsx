import {PlayerSymbol} from "./Container";
import React, {useState} from "react";
import {GameBoardRowProps} from "./GameBoardRow";

export interface CellProps {
    GameBoardRowProps: GameBoardRowProps,
    colIndex: number,
}

export const GameBoardCell = ({GameBoardRowProps, colIndex}: CellProps): React.JSX.Element => {
    const [cell, setCell]
        : [PlayerSymbol, React.Dispatch<React.SetStateAction<PlayerSymbol>>]
        = useState(null as unknown as PlayerSymbol);


    const elementClickHandler = (): void => {
        setCell((prevCell: PlayerSymbol): PlayerSymbol => GameBoardRowProps.GameBoardProps!.curPlayer.symbol);
        GameBoardRowProps.GameBoardProps!.onSelect!(GameBoardRowProps.rowIndex, colIndex);

    };

    return (
        <li key={`${GameBoardRowProps.rowIndex}${colIndex}`}>
            <button onClick={elementClickHandler}>{cell}</button>
        </li>
    );
};