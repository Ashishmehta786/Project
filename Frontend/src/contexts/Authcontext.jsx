import { createContext } from "react";

const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
  return <Authcontext.Provider>{children}</Authcontext.Provider>;
};


export {Authcontext,Authprovider}