import React from 'react';
import './App.css';
import logo from "./assets/game-logo.png";
import {Header} from "./components/Header";
import {Container} from "./components/Container";
function App(): React.JSX.Element {



    return (
        <>
            <Header logo={logo}/>
            <Container/>;
        </>
    )
        ;
}

export default App;

