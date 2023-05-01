import React, { useState } from "react";
import { createBoard } from "../util/boardUtil";

const Board = ({row, col}) => {
  const [board, setBoard] = useState(createBoard(row, col));
  
  return (
    <div>

    </div>
  )
}

export default Board