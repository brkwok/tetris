import { useState, useCallback, useEffect } from "react";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 100;

export const useDropTime = ({ stats }) => {
	const [dropTime, setDropTime] = useState(defaultDropTime);
	const [prevDropTime, setPrevDropTime] = useState();

	const resumeDropTime = useCallback(() => {
		if (!prevDropTime) return;

		setDropTime(prevDropTime);
		setPrevDropTime(null);
	}, [prevDropTime]);

	const pauseDropTime = useCallback(() => {
		if (dropTime) {
			setPrevDropTime(dropTime);
		}
		setDropTime(null);
	}, [dropTime, setPrevDropTime]);

	useEffect(() => {
		const speed = speedIncrement * (stats.level - 1);
		const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime);

		setDropTime(newDropTime);
	}, [stats.level, setDropTime]);

	return [dropTime, pauseDropTime, resumeDropTime];
};
