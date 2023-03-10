import Layout from '@/Layouts/Layout'
import { Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongItem from '@/components/SongItem'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AlbumSongItem from '@/components/AlbumSongItem'

const currentAlbum = () => {
  const [myData, setMyData] = useState([])
  const [artistsName, setArtistsName] = useState('')
  const [name, setName] = useState<any>('')
  const [images, setImages] = useState("")
  const router = useRouter()
  const id = router.asPath.split('/')[2]
  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'


  useEffect(() => {
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setMyData(res.data.items)
        setArtistsName(res?.data?.items[0]?.artists[0]?.name)
      }).catch((e) => {
        if (e.message === 'Request failed with status code 400') {
          router.push('/404')
        }
        async function getting() {
          await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=1&limit=100&locale=ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then(res => {
            setMyData(res.data.items)
            setArtistsName(res?.data?.items[0]?.track?.artists[0]?.name)
          })
        }
        getting()
      });
    }
    getAllAlbums()
  }, [id])
  useEffect(() => {
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setImages(res.data.images[0].url)
      }).catch((e) => {
        if (e.message === 'Request failed with status code 400') {
          router.push('/404')
        }
        async function getting() {
          await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then(res => {
            setImages(res.data.images[0].url)
          })
        }
        getting()
      });
    }
    getAllAlbums()
  }, [id])

  useEffect(() => {
    setName(localStorage.getItem('albumSongName'))
  }, [])

  return (
    <Layout>
      {
        myData.length === 0 ? <Stack sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <div className="loading">
            <span className="blob1 blob"></span>
            <span className="blob2 blob"></span>
            <span className="blob3 blob"></span>
          </div>
        </Stack>
          :
          <Stack sx={{ transition: '.4s ease' }}>
            <Stack sx={{ gap: "20px", background: 'transparent', flexDirection: "row", alignItems: 'flex-end' }}>
              <img src={images || image} style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 8px 10px rgba(34, 60, 80, 0.07)' }} alt="" />
              <Stack>
                <Typography sx={{ color: "White", fontWeight: "700", fontSize: '18px' }}>Open playist</Typography>
                <Typography sx={{ color: "White", fontWeight: "700", fontSize: '62px' }}>{name}</Typography>
                <Typography sx={{ color: 'white', fontWeight: "500", fontSize: '20px' }} >{artistsName} : {myData.length} tracks </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ width: '100%', paddingTop: "30px" }}>
              <ol>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Stack sx={{ flexDirection: 'row', gap: "14px" }}>
                    <Typography sx={{ color: '#989898', fontSize: '18px', fontWeight: "600", }}>Name</Typography>
                  </Stack>
                  <Typography sx={{ width: '100px' }}>
                    <AccessTimeIcon sx={{ color: '#989898', fontWeight: '600' }} />
                  </Typography>
                </Stack>
                {
                  myData.length === 0 ? <Typography sx={{ color: '#989898', display: 'flex', gap: "10px", alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: "600", textAlign: 'center' }}> <ErrorOutlineIcon sx={{ fontSize: '32px' }} /> There we have not tracks</Typography> : myData.map((i: any) => (
                    <AlbumSongItem image={image} images={images} i={i} key={i.id} />
                  ))
                }
              </ol>
            </Stack>
          </Stack>
      }
    </Layout>
  )
}

export default currentAlbum
