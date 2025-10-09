import { useContext } from "react";
import { SiteContext } from "../context/site-context";

export const useSite = () => useContext(SiteContext);