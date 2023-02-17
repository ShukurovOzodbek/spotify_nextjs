import Layout from '@/Layouts/Layout'
import { Stack, Typography, Link } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import AlbumSongItem from '@/components/AlbumSongItem'
import BestMixes from '@/components/BestMixes'
import Aritsts from '@/components/Aritsts'

const current = () => {
  const [artistImage, setArtistImage] = useState<any>('')
  const [artistName, setArtistName] = useState<any>('')
  const [artistFollow, setArtistFollow] = useState<any>('')
  const [topTracks, setTopTracks] = useState([])
  const [artsitsAlbums, setArtsitsAlbums] = useState([])
  const [related, setRelated] = useState([])

  const router = useRouter()
  const id = router.asPath.split('/')[2].split('#')[0]

  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'

  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getCurrentArtist() {
      await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setArtistImage(res.data?.images[0]?.url)
        setArtistName(res.data?.name)
        setArtistFollow(res.data?.followers?.total)
      }).catch(err => console.log(err))
    }
    getCurrentArtist()
  }, [id])


  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getArtistTracks() {
      await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=UZ&offset=1&limit=50`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setTopTracks(res.data.tracks)
      }).catch(err => console.log(err))
    }
    getArtistTracks()
  }, [id])

  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getArtistAlbums() {
      await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setArtsitsAlbums(res.data.items)
      }).catch(err => console.log(err))
    }
    getArtistAlbums()
  }, [id])

  useEffect(() => {
    let token = localStorage.getItem('token')
    async function getRelatedArtists() {
      await axios.get(`	https://api.spotify.com/v1/artists/${id}/related-artists`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setRelated(res.data.artists)
      }).catch(err => console.log(err))
    }
    getRelatedArtists()
  }, [id])

  return (
    <Layout>
      <Stack sx={{ width: '100%', gap: "20px" }}>
        <Stack sx={{ width: '100%', flexDirection: 'row', gap: '20px', alignItems: 'flex-end' }} id="div">
          <img width={'220px'} height={'220px'} style={{ borderRadius: '100%', objectFit: 'cover', boxShadow: '2px 2px 37px 12px rgba(34, 60, 80, 0.2)' }} src={artistImage} alt="" />
          <Stack sx={{ gap: '15px', mb: "15px" }}>
            <Stack sx={{ color: 'white', flexDirection: 'row', alignItems: "center", gap: "10px" }}>
              <CheckIcon />
              <Typography sx={{ color: 'white', fontSize: '17px' }}>Подтвержденный исполнитель</Typography>
            </Stack>
            <Typography sx={{ color: 'white', fontSize: '70px', fontWeight: '900', lineHeight: "70px" }}>{artistName}</Typography>
            <Typography sx={{ color: 'white', fontSize: '17px' }}>{artistFollow} подписчиков</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px" }}>Popular tracks {artistName}</Typography>
          <Stack sx={{ width: "80%" }}>
            {
              topTracks.map((i: any) => <AlbumSongItem image={image} images={i?.album?.images[0]?.url} i={i} key={i.id} width={'60px'} />)
            }
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px" }}>Albums {artistName}</Typography>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            {
              artsitsAlbums.map((item: any) => <BestMixes item={item} key={item.name} />)
            }
          </Stack>
        </Stack>
        <Stack sx={{ gap: '10px' }}>
          <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px" }}>Related artists</Typography>
          <Stack sx={{ display: 'flex', textDecoration: "none", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            {
              related.map((i: any, index: number) => <Aritsts item={i} key={index} />)
            }
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default current
