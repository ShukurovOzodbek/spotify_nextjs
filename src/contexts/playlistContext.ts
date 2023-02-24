import { createContext } from "react";

export const playlistContext = createContext<{value:object, changeAddPlaylist:(data:any) => void}>({value: {}, changeAddPlaylist: () => undefined})