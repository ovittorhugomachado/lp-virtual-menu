import { type ReactNode } from "react";
import { SiteContext } from "./site-context";
import defaultSiteData from "./site-context";

type SiteProviderProps = {
  children: ReactNode;
};

export const SiteProvider = ({ children }: SiteProviderProps) => {
  return (
    <SiteContext.Provider value={defaultSiteData}>
      {children}
    </SiteContext.Provider>
  );
};