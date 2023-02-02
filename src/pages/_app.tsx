import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { songContext } from '@/contexts/songContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [val, setVal] = useState({})

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
