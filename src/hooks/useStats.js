import { useCallback, useState } from "react";
import { buildStats } from "../util/statUtil";

export const useStats = () => {
	const [stats, setStats] = useState(buildStats());

	const addLinesCompleted = useCallback(() => {}, []);

	return [stats, addLinesCompleted];
};
