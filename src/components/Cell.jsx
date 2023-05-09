import React from "react";

const tetrominoes = {
	I: "bg-cyan-400",
	J: "bg-blue-700",
	L: "bg-orange-400",
	T: "bg-pink-400",
	Z: "bg-red-400",
	S: "bg-green-400",
	O: "bg-yellow-400",
	E: "bg-blue-200",
	G: "bg-black"
};

const Cell = ({ type }) => {
	const cellColor = tetrominoes[type] || tetrominoes["E"];

	return <div className={`w-auto h-auto relative ${cellColor}`}></div>;
};

export default Cell;
