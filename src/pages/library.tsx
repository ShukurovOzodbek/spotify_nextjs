import Layout from '@/Layouts/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Playlists from '@/components/Playlist';
import { Stack, Typography } from '@mui/material';

const library = () => {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setMyData(res.data.items)
      })
    }
    getAllAlbums()
  }, [])

  return (
    <Layout>
      <Stack sx={{ gap: '10px' }}>
        <Typography sx={{ fontSize: '24px', color: 'white' }}>Your library</Typography>
        <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
          {
            myData.map((i: any, index: number) => <Playlists item={i} key={index} />)
          }
        </Stack>
      </Stack>
    </Layout>
  )
}

export default library
