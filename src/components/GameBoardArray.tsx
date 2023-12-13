import React from "react";
import {GameBoardRow} from "./GameBoardRow";
import {GameBoardProps} from "./GameBoard";


export const GameBoardArray = ({...GameBoardProps}: GameBoardProps): React.JSX.Element => {


    return (
        <ol>
            <GameBoardRow GameBoardProps={GameBoardProps} rowIndex={0}/>
            <GameBoardRow GameBoardProps={GameBoardProps} rowIndex={1}/>
            <GameBoardRow GameBoardProps={GameBoardProps} rowIndex={2}/>
        </ol>
    );
};