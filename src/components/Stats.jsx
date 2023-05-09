import React from "react";

const Stats = ({ stats }) => {
	const { level, score, linesCompleted, linesPerLevel } = stats;
	const linesLeft = linesPerLevel - linesCompleted;

	return (
		<ul className="absolute w-[22vw] text-white list-none right-[-22vw] bottom-0 text-left odd:child:text-2xl even:child:text-xl even:child:font-bold space-y-1 bg-blue-400">
			<li>Level</li>
			<li>{level}</li>
			<li>Lines To Next Level</li>
			<li>{linesLeft}</li>
			<li>Score</li>
			<li>{score}</li>
		</ul>
	);
};

export default React.memo(Stats);
