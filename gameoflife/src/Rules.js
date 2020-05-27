import React from "react";

function Rules() {
  return (
    <div>
      <h1>Rules of Conway's Game of Life</h1>
      <h2 className="rules-descriptor">
        In the Game of Life, these rules examine each cell of the grid. For each
        cell, it counts that cell's eight neighbors{" "}
        {"(up, down, left, right, and diagonals)"}, and then act on that result.
      </h2>
      <h3>
        <ul>
          If the cell is alive and has 2 or 3 neighbors, then it remains alive.
          Else it dies.
        </ul>
        <ul>
          If the cell is dead and has exactly 3 neighbors, then it comes to
          life. Else if remains dead.
        </ul>
      </h3>
      <h4>
        Note: cells that are off the edge of the grid are typically assumed to
        be dead.{" "}
        {
          "(In other cases, people sometimes code it up to wrap around to the far side.)"
        }
      </h4>
    </div>
  );
}

export default Rules;
