import React from "react";

const tetrominoes = {
  "I": "bg-cyan-400",
  "J": "bg-blue-400",
  "L": "bg-orange-400",
  "T": "bg-pink-400",
  "Z": "bg-red-400",
  "S": "bg-green-400",
  "O": "bg-yellow-400",
}

const Cell = ({ className, type }) => {
	return <div className={`w-auto bg-pink bg-yellow relative border border-white ${tetrominoes[type]}`}></div>;
};

export default Cell;
