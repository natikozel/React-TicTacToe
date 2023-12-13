import React, {useState, ChangeEvent} from "react";
import {PlayerSymbol} from "./Container";

export interface PlayerProps {
    readonly symbol: PlayerSymbol
    name: string,
    isActive: boolean,
    onSave: Function,
}


export const Player = ({name, symbol, isActive, onSave}: PlayerProps): React.JSX.Element => {

    const [edit, setEdit]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const [playerName, setPlayerName]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("");

    const handleEdit = (): void => {
        setEdit((prevEdit: boolean): boolean => !prevEdit);

        if (edit)
            onSave(symbol, playerName);

    };

    const handlePlayerName = (e: ChangeEvent<HTMLInputElement>): void => {
        setPlayerName((prevPlayerName: string): string => e.target.value);
    };

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {edit ?
                    <input
                        className="player-name"
                        type="text"
                        placeholder={name}
                        value={playerName}
                        onChange={handlePlayerName}
                    >
                    </input>
                    :
                    <span
                        className="player-name">{playerName ? playerName : name}
                    </span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>
                {edit ? "Save" : "Edit"}
            </button>
        </li>
    );
};