import Layout from '@/Layouts/Layout'
import { Button, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SongItem from '@/components/SongItem';
import { getAverageRGB } from '@/hook/getImageColor'
import { songContext } from '@/contexts/songContext'

const playlistId = () => {
  const [myData, setMyData] = useState<any>([])
  const [artistsName, setArtistsName] = useState('')
  const [imagePlaylist, setImagePlaylist] = useState('')
  const [name, setName] = useState('')
  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
  const router = useRouter()
  const id = router.asPath.split('/')[2]
  const img = useRef(null)
  const data: any = myData[0]
  const images = data?.track.album.images[0].url

  const [show, setShow] = useState<any>(false)
  const [valueName, setValueName] = useState<any>(name)

  const { changeSong } = useContext(songContext)


  let inputRef: any = useRef(null)

  useEffect(() => {
    setMyData([])
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setMyData(res.data.items)
      }).catch((e) => {
      });
    }
    getAllAlbums()

  }, [id])

  useEffect(() => {
    setMyData([])
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setArtistsName(res.data.display_name)
      }).catch((e) => {
      });
    }
    getAllAlbums()
  }, [id])

  useEffect(() => {
    setMyData([])
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setImagePlaylist(res?.data?.images[0]?.url)
        setName(res.data.name)
      }).catch((e) => {
      });
    }
    getAllAlbums()
  }, [id])
  return (
    <Layout background={images}>
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
              <img ref={img} src={imagePlaylist || image} style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 8px 10px rgba(34, 60, 80, 0.07)' }} alt="" />
              <Stack>
                <Typography sx={{ color: "White", fontWeight: "700", fontSize: '18px' }}>Open playist</Typography>
                <Typography onClick={() => setShow(true)} sx={{ display: show ? 'none' : 'block', color: "White", fontWeight: "700", fontSize: '62px', cursor: "pointer" }}>{name}</Typography>
                <Typography sx={{ color: 'white', fontWeight: "500", fontSize: '20px' }} >{artistsName} : {myData.length} tracks </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ width: '100%', paddingTop: "30px" }}>
              <ol>
                <li>
                  <Stack sx={{ flexDirection: 'row', gap: "14px" }}>
                    <Typography sx={{ color: '#989898', fontSize: '18px', fontWeight: "600", }}>Name</Typography>
                  </Stack>
                  <Stack sx={{ flexDirection: 'row', gap: "14px" }}>
                    <Typography sx={{ color: '#989898', fontSize: '18px', fontWeight: "600", }}>Date</Typography>
                  </Stack>
                  <Typography sx={{ width: '90px' }}>
                    <AccessTimeIcon sx={{ color: '#989898', fontWeight: '600' }} />
                  </Typography>
                </li>
                {
                  myData.length === 0 ? <Typography sx={{ color: '#989898', display: 'flex', gap: "10px", alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: "600", textAlign: 'center' }}> <ErrorOutlineIcon sx={{ fontSize: '32px' }} /> There we have not tracks</Typography> : myData.map((i: any) => (
                    <SongItem image={image} images={i?.track?.album?.images[0]?.url} i={i} key={i.track.id} />
                  ))
                }
              </ol>
            </Stack>
          </Stack>
      }
    </Layout>
  )
}

export default playlistId
