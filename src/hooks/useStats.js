import { useCallback, useState } from "react";
import {
	LINES_PER_LEVEL,
	LINE_CLEAR_SCORE,
	buildStats,
} from "../util/statUtil";

export const useStats = () => {
	const [stats, setStats] = useState(buildStats());

	const addLinesCompleted = useCallback((linesCleared) => {
		setStats((prevStats) => {
			const numPoints = prevStats.score + LINE_CLEAR_SCORE[linesCleared];
			const { linesPerLevel } = prevStats;
			const newLinesCompleted = prevStats.linesCompleted + linesCleared;
			const level =
				newLinesCompleted >= linesPerLevel
					? prevStats.level + 1
					: prevStats.level;

			const nextLinePerLevel = LINES_PER_LEVEL[level] || 20;

			const linesCompleted = newLinesCompleted % nextLinePerLevel;

			const newLinesPerLevel = LINES_PER_LEVEL[level] || 20;

			return {
				level: level,
				score: numPoints,
				linesPerLevel: newLinesPerLevel,
				linesCompleted: linesCompleted,
			};
		}, []);
	}, []);

	return [stats, addLinesCompleted];
};
