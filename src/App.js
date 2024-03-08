import "./App.css";
import { useState } from "react";

export default function App() {
    const [difficulty, setDifficulty] = useState(2);
    const [cells, setCells] = useState(Array(4).fill(null));

    const handleOnChange = (e) => {
        const { value } = e.target;
        setDifficulty(value);
        setCells(Array(value ** 2).fill(null));
    };

    return (
        <div className="container">
            <h1>Memory Game</h1>
            <p>Difficulty: {difficulty}</p>
            <input
                type="range"
                min="2"
                max="20"
                step="1"
                onChange={handleOnChange}
            />
            <button>Start Game</button>

            <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${difficulty}, 1fr` }}
            >
                {cells.map((cell, idx) => {
                    return <div key={idx} className="grid__cell"></div>;
                })}
            </div>
        </div>
    );
}
