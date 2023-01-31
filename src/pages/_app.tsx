import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { songContext } from '@/contexts/songContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [val, setVal] = useState({
    image: "https://i.scdn.co/image/ab67616d0000b273a7717523c2f13a93b89b8886",
    uri: "https://p.scdn.co/mp3-preview/034b7179a2b15498aa825b872f3106970915ece0?cid=4109f1d797b647deb42f11dd69907b49",
    songName: "Atlant",
    artist: "Miyagi & Andy Panda"
  })

  const changeSong = (data:any) => {
    setVal(data)
  }

  return (
    <Provider store={store}>
      <songContext.Provider value={{val, changeSong}} >
        <Component {...pageProps} />
      </songContext.Provider>
    </Provider>
  )
}
