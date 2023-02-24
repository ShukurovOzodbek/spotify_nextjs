import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { songContext } from '@/contexts/songContext'
import { playlistContext } from '@/contexts/playlistContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [val, setVal] = useState({})
  const [value, setValue] = useState<any>({})

  const changeSong = (data: any) => {
    setVal(data)
  }
  const changeAddPlaylist = (data: any) => {
    setValue(data)
  }

  return (
    <Provider store={store}>
      <songContext.Provider value={{ val, changeSong }} >
        <playlistContext.Provider value={{ value, changeAddPlaylist }}> 
          <Component {...pageProps} />
        </playlistContext.Provider>
      </songContext.Provider>
    </Provider>
  )
}
