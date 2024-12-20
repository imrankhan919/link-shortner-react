import { createContext, useReducer } from "react";
import LinkReducer from "./LinkReducer";

const LinkContext = createContext();

// Provider
export const LinkProvider = ({ children }) => {
  const initialState = {
    links: [],
  };

  const [state, dispatch] = useReducer(LinkReducer, initialState);

  return (
    <LinkContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;

// https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=http://google.com/&service[name]=shrlc
