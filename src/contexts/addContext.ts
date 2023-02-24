import { createContext } from "react";

export const addContext = createContext<{val:object, changeAdd:(data:any) => void}>({val: {}, changeAdd: () => undefined})