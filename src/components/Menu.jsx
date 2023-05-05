import React from "react";

const Menu = ({ onClick }) => {
	return (
		<div className="flex justify-center align-center z-50 absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<button
				className="text-xl border-none rounded-md shadow-sm py-3 px-5 bg-blue-200 text-white hover:bg-blue-500"
				onClick={onClick}
			>
				Start Game
			</button>
		</div>
	);
};

export default Menu;
