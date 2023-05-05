import React from "react";

const tetrominoes = {
  "i": "bg-cyan-400",
  "j": "bg-blue-400",
  "l": "bg-orange-400",
  "t": "bg-pink-400",
  "z": "bg-red-400",
  "s": "bg-green-400",
  "o": "bg-yellow-400",
}

const Cell = ({ className, type }) => {
	return <div className={`w-auto bg-pink bg-yellow relative border border-white ${tetrominoes[type]}`}></div>;
};

export default Cell;
