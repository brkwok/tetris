import { useEffect, useRef } from "react";

export const useInterval = (cb, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = cb;
	}, [cb]);

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			const id = setInterval(tick, delay);

			return () => {
				clearInterval(id);
			};
		}
	}, [delay]);
};
