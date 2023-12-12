import React from "react";
import {GameBoardProps} from "./Container"
import {GameBoardArray} from "./GameBoardArray";

export const GameBoard = ({curPlayer, onSelect} : GameBoardProps) => {

    // const [initialGameBoard, setInitialGameBoard]
    //     : [Array<PlayerSymbol[]>, React.Dispatch<React.SetStateAction<Array<PlayerSymbol[]>>>]
    //     =
    //     useState([
    //         [null as unknown as PlayerSymbol, null, null],
    //         [null, null, null],
    //         [null, null, null],
    //     ]);

    // const elementClickHandler = (rowIndex: number, colIndex: number): void => {
    //     const newArray: Array<PlayerSymbol[]> = [...initialGameBoard];
    //     newArray[rowIndex][colIndex] = curPlayer;
    //     setInitialGameBoard((prevList: Array<PlayerSymbol[]>) => newArray);
    //     onSelect!()
    //
    // };

    return (
        <ol id="game-board">
            <GameBoardArray onSelect={onSelect} curPlayer={curPlayer}/>
            {/*{initialGameBoard.map((row: PlayerSymbol[], rowIndex: number) =>*/}
            {/*    <ol key={rowIndex + "ROW"}>*/}
            {/*        {row.map((element: PlayerSymbol, colIndex: number) =>*/}
            {/*            <li key={(rowIndex * initialGameBoard.length) + colIndex}>*/}
            {/*                <button onClick={() => elementClickHandler(rowIndex, colIndex)}>{element}</button>*/}
            {/*            </li>)}*/}
            {/*    </ol>*/}
            {/*)}*/}
        </ol>
    );
};