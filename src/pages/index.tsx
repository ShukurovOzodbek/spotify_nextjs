import Layout from "@/Layouts/Layout";
import EveryDayMix from "@/components/EveryDayMix";
import MadeFor from "@/components/MadeFor";
import { getAlbums } from "@/hook/getAlbums";
import { fetchAlbums } from "@/store/features/albums/albumThunk";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'

export default function Home() {
  const [data, setData] = React.useState([])
  const [myData, setMyData] = React.useState([])
  const router = useRouter()
  const dispatch = useDispatch<any>()
  const albums = useSelector((state: any) => state.albums.albums)

  useEffect(() => {
    let token = localStorage.getItem('token')
    let searchKey = 'YAMAKASI'
    const obj = { token, searchKey }
    if (albums.length === 0) {
      dispatch(fetchAlbums(obj))
    }
  }, [])
  useEffect(() => {
    let strg: any = localStorage.getItem('token')
    if (!strg) {
      router.push('/login')
    }
  }, [])

  useEffect(() => {
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get("https://api.spotify.com/v1/browse/new-releases?country=US&limit=5&offset=5", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        setData(res.data.albums.items)
      })
    }
    getAllAlbums()
  }, [])

  useEffect(() => {
    async function getAllAlbums() {
      let token = localStorage.getItem('token')
      await axios.get("https://api.spotify.com/v1/me/playlists?limit=50&offset=0", {
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
      <Stack sx={{ width: '100%', height: "100%", padding: "20px 0px", gap: "10px" }}>
        <Stack sx={{ gap: '15px' }}>
          <Typography sx={{ fontSize: '28px', color: "white", textDecoration: 'none', fontWeight: '600' }} >Have a good day </Typography>
          <EveryDayMix arr={myData} />
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Albums that can be liked by you</Link>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <MadeFor arr={data} />
          </Stack>
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Artists for you</Link>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <MadeFor arr={data} />
          </Stack>
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Recently Listened</Link>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <MadeFor arr={data} />
          </Stack>
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Popular Artists</Link>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <MadeFor arr={data} />
          </Stack>
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Who likes Miyagi</Link>
          <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <MadeFor arr={data} />
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}
