import React from "react";

const tetrominoes = {
	I: "bg-cyan-400",
	J: "bg-orange-400",
	L: "bg-teal-400",
	T: "bg-pink-400",
	Z: "bg-red-400",
	S: "bg-green-400",
	O: "bg-yellow-400",
	E: "bg-blue-800",
	G: "bg-gray-300"
};

const Cell = ({ type }) => {
	const cellColor = tetrominoes[type] || tetrominoes["E"];

	return <div className={`w-auto bg h-auto relative ${cellColor}`}></div>;
};

export default Cell;
