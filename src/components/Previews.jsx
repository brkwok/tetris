import React from "react";
import Preview from "./Preview";

const Previews = ({ tetrominoes }) => {
	const previews = tetrominoes.slice(1 - tetrominoes.length).reverse();

	return (
		<>
			{previews.map((tetromino, idx) => (
				<Preview tetromino={tetromino} index={idx} key={idx} />
			))}
		</>
	);
};

export default React.memo(Previews);
