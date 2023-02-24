import Layout from '@/Layouts/Layout'
import { Stack, Typography, Link } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Playlists from '@/components/Playlist'
import { useRouter } from 'next/router'

const current = () => {
  const [userImage, setUserImage] = useState<any>('')
  const [userName, setUserName] = useState<any>('')
  const [userFollow, setUserFollow] = useState<any>('')
  const [userPlaylists, setUserPlaylists] = useState([])
  const [likedSongs, setLikedSongs] = useState([])

  const router = useRouter()
  const id = router.asPath.split('/')[2].split('#')[0]

  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'

  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getCurrentUser() {
      await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setUserImage(res.data?.images[0]?.url)
        setUserName(res.data?.display_name)
        setUserFollow(res.data?.followers?.total)
      }).catch(err => console.log(err))
    }
    getCurrentUser()
  }, [id])

  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getCurrentUserPlaylist() {
      await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setUserPlaylists(res.data.items)
      }).catch(err => console.log(err))
    }
    getCurrentUserPlaylist()
  }, [id])

  return (
    <Layout>
      <Stack sx={{ width: '100%', gap: "20px" }}>
        <Stack sx={{ width: '100%', flexDirection: 'row', gap: '20px', alignItems: 'flex-end' }} id="div">
          <img width={'220px'} height={'220px'} style={{ borderRadius: '100%', objectFit: 'cover', boxShadow: '2px 2px 37px 12px rgba(34, 60, 80, 0.2)' }} src={userImage || image} alt="" />
          <Stack sx={{ gap: '15px', mb: "45px" }}>
            <Typography sx={{ color: 'white', fontSize: '70px', fontWeight: '900', lineHeight: "70px" }}>{userName}</Typography>
            <Typography sx={{ color: 'white', fontSize: '17px' }}>{userFollow} подписчиков</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px" }}>Your Playlists</Typography>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            {
              userPlaylists.map((item: any) => <Playlists item={item} key={item.name} />)
            }
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default current
