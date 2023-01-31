import { createContext } from "react";

export const songContext = createContext<{val:object, changeSong:(data:any) => void}>({val: {}, changeSong: () => undefined})