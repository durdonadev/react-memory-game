import "./App.css";
import { useState } from "react";

export default function App() {
    const [difficulty, setDifficulty] = useState(2);
    const [cells, setCells] = useState(Array(4).fill(null));
    const [markedCells, setMarkedCells] = useState(null);

    const handleOnChange = (e) => {
        const { value } = e.target;
        setDifficulty(value);
        setCells(Array(value ** 2).fill(null));
    };

    const generateRandomCells = (difficulty) => {
        const cells = [];

        while (cells.length < difficulty) {
            const randomCell = Math.floor(Math.random() * difficulty ** 2);
            if (cells.indexOf(randomCell) === -1) {
                cells.push(randomCell);
            }
        }

        let cellsSet = {};
        for (let ele of cells) {
            cellsSet[ele] = true;
        }

        setMarkedCells(cellsSet);
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
            <button onClick={generateRandomCells}>Start Game</button>

            <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${difficulty}, 1fr)` }}
            >
                {cells.map((cell, idx) => {
                    return (
                        <div
                            key={idx}
                            className={
                                markedCells ? "marked-cell" : "grid__cell"
                            }
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
