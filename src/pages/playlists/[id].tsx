import Layout from '@/Layouts/Layout'
import { Button, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SongItem from '@/components/SongItem';

const playlistId = () => {
  const [myData, setMyData] = useState([])
  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
  const router = useRouter()
  const id = router.asPath.split('/')[2]

  const data: any = myData[0]
  const images = data?.track.album.images[0].url
  const name = data?.track.album.name

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
      }).catch((e) => { });
    }
    getAllAlbums()
  }, [id])

  useEffect(() => {
    setMyData([])
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get(`https://api.spotify.com/v1/tracks/5K6DVd7s3JrLjQOx4ttOMw`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        console.log(res.data);
      }).catch((e) => { });
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
              <img src={images || image} style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 8px 10px rgba(34, 60, 80, 0.07)' }} alt="" />
              <Stack>
                <Typography sx={{ color: "White", fontWeight: "700", fontSize: '18px' }}>Open playist</Typography>
                <Typography sx={{ color: "White", fontWeight: "700", fontSize: '62px' }}>{name}</Typography>
                <Typography sx={{ color: 'white', fontWeight: "500", fontSize: '20px' }} > lorem : ipsum : {myData.length} tracks </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ width: '100%', alignItems: "center", flexDirection: 'row', gap: '15px', paddingTop: '30px' }}>
              <Button variant='contained' sx={[{ borderRadius: "100%", color: 'white', background: '#1DB954', minWidth: "0", width: '58px', height: '58px', transition: ".3s ease" }, { '&:hover': { background: '#10A043' } }]}>
                <PlayArrowIcon sx={{ color: 'black', fontSize: "37px" }} />
              </Button>
              <FavoriteBorderIcon sx={{ color: '#989898', fontSize: '48px', fontWeight: '200', cursor: 'pointer' }} />
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
                    <SongItem image={image} images={images} i={i}  key={i.track.id} />
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
