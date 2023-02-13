import Layout from '@/Layouts/Layout'
import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import AlbumSongItem from '@/components/AlbumSongItem'

const search = () => {
  const data = useSelector((state:any) => state.tracks.tracks)
  const [tracks, setTracks] = useState([])
  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'

  useEffect(() => {
    setTracks(data)
  }, [data])

  return (
    <Layout>
      <Stack sx={{ width: "50%" }}>  
        {
          tracks.map((i:any, index:number) => <AlbumSongItem image={image} images={i?.album?.images[0]?.url} i={i} key={index} />)
        }
      </Stack>
    </Layout>
  )
}

export default search
