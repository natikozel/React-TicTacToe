import React from "react";
import {GameBoardRow} from "./GameBoardRow";
import {PlayerSymbol} from "./Container";

export interface GameBoardArrayProps {
    onSelect?: Function,
    curPlayer: PlayerSymbol
}


export const GameBoardArray = ({...GameBoardArrayProps}: GameBoardArrayProps): React.JSX.Element => {


    return (
        <ol>
            <GameBoardRow GameBoardArrayProps={GameBoardArrayProps} rowIndex={1}/>
            <GameBoardRow GameBoardArrayProps={GameBoardArrayProps} rowIndex={2}/>
            <GameBoardRow GameBoardArrayProps={GameBoardArrayProps} rowIndex={3}/>
        </ol>
    );
};