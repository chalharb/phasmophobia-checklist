import React, { createContext, useState, FC } from "react";
import {
    Ghost,
} from './models'

import {
    GHOSTS
} from './constants'

type GlobalContextState = {
    ghosts: Array<Ghost>;
    selected: string[];
  };

  
const contextDefaultValues: GlobalContextState = {
  ghosts: GHOSTS,
  selected: []
};

export const GlobalContext = createContext<GlobalContextState>(
  contextDefaultValues
);

const GlobalStateProvider: FC = ({ children }) => {
  const [ghosts, setGhosts] = useState<Array<Ghost>>(contextDefaultValues.ghosts);
  const [selected, setselected] = useState<string[]>(contextDefaultValues.selected);

  return (
    <GlobalContext.Provider
      value={{
        ghosts,
        selected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
