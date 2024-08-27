import React from "react";
import Canvas from "./components/Canvas.jsx";

export default function App() {
    return (
        <div className="bg-neblack h-screen w-screen p-4">
            <h1 className="bg-gradient-to-r from-gunmetal font-bold text-almond text-4xl mb-2 p-1">Hello Nebula 🪐</h1>
            <Canvas/>
        </div>
    )
}