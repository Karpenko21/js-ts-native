import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./6/06_callback";

function App() {

    const  names = ["Dimych", "Sveta", "Katya", "Viktor", "Ignat"]
    const users = [
        {name: "Dimych"},
        {name: "Sveta"},
        {name:"Katya"},
        {name:"Viktor"},
        {name:"Ignat"}
    ]
    const lielements = users.map((u, index) => <li key ={index}>{u.name}</li>)

    return (
        <div className="App">
            <User/>
            <ul>
                {lielements}
            </ul>
        </div>
    );
}

export default App;
