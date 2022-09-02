import { useState } from "react";

import { MAX_POS } from "../constant";
import times from "lodash/times";
import { getInitialTileList } from "../util/tile";

export default function Game() {
  const [tileList, setTileList] = useState(getInitialTileList);

  return (
    <div className="game-container">
      <div className="game-message">
        <p></p>
        <div className="lower">
          <a className="keep-playing-button">Keep going</a>
          <a className="retry-button">Try again</a>
        </div>
      </div>
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((tile) => (
          <div
            className={`tile tile-${tile.value} tile-position-${tile.x}-${tile.y} tile-new`}
          >
            <div className="tile-inner">{tile.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
