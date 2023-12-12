import React from "react";

export const Header = ({logo}: any): React.JSX.Element => {
    return (
        <header>
            <img src={logo} alt="Hand-drawn-logo"></img>
            <h1>React Tic-Tac-Toe</h1>
        </header>
    );
};