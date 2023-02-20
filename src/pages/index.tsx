import Layout from "@/Layouts/Layout";
import EveryDayMix from "@/components/EveryDayMix";
import { fetchAlbums, fetchPlaylists } from "@/store/features/albums/albumThunk";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { fetchCategories } from "@/store/features/categories/categoryThunk";
import axios from "axios";
import BestMixes from "@/components/BestMixes";
import EveryDay from "@/components/EveryDay";
import Categories from "@/components/Categories";
import Aritsts from "@/components/Aritsts";

export default function Home() {
  const [artsitsAlbums, setArtsitsAlbums] = useState([])
  const [related, setRelated] = useState([])

  const router = useRouter()
  const dispatch = useDispatch<any>()
  const albums = useSelector((state: any) => state.albums.albums)
  const categories = useSelector((state: any) => state.categories.categories)
  const playlists = useSelector((state: any) => state.albums.playlists)


  useEffect(() => {
    let token = localStorage.getItem('token')
    const obj = { token }
    if (!token) {
      router.push('/login')
    }
    if (albums.length === 0) {
      dispatch(fetchAlbums(obj))
    }
    if (categories.length === 0) {
      dispatch(fetchCategories(obj))
    }
    if (playlists.length === 0) {
      dispatch(fetchPlaylists(obj))
    }
    async function getArtistAlbums() {
      await axios.get(`https://api.spotify.com/v1/artists/1kmpkcYbuaZ8tnFejLzkj2/albums`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setArtsitsAlbums(res.data.items)
      }).catch(err => console.log(err))
    }
    getArtistAlbums()
    async function getRelatedArtists() {
      await axios.get(`	https://api.spotify.com/v1/artists/1kmpkcYbuaZ8tnFejLzkj2/related-artists`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setRelated(res.data.artists)
      }).catch(err => console.log(err))
    }
    getRelatedArtists()
  }, [])

  return (
    <Layout>
      {
        playlists.length == 0 ? <Stack sx={{ position: 'absolute', top: '44%', left: '52%' }}>
          <div className="loading">
            <span className="blob1 blob"></span>
            <span className="blob2 blob"></span>
            <span className="blob3 blob"></span>
          </div>
        </Stack> : <Stack sx={{ width: '100%', gap: "10px" }}>
          <Stack sx={{ gap: '15px' }}>
            <Typography sx={{ fontSize: '28px', color: "white", textDecoration: 'none', fontWeight: '700', lineHeight: "70px" }} >Have a good day </Typography>
            <Stack sx={{ color: 'white', mb: "20px", gap: '24px', flexDirection: "row", flexWrap: 'wrap', width: '96.6%' }}>
              {
                playlists.slice(0, 6).map((item: any) => <EveryDay item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/albums" sx={[{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px", textDecoration: 'none' }, { '&:hover': { textDecoration: 'underline white' } }]}>Albums that can be liked by you</Link>
            <Stack sx={{ width: "100%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                albums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/categories" sx={[{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px", textDecoration: 'none' }, { '&:hover': { textDecoration: 'underline white' } }]}>Categories</Link>
            <Stack sx={{ width: "100%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                categories.slice(0, 5).map((item: any) => <Categories item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/artists/1kmpkcYbuaZ8tnFejLzkj2" sx={[{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px", textDecoration: 'none' }, { '&:hover': { textDecoration: 'underline white' } }]}>Who likes Miyagi</Link>
            <Stack sx={{ width: "100%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                artsitsAlbums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px", textDecoration: 'none' }}>Realted artists to Miyagi</Typography>
            <Stack sx={{ width: "100%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                related.slice(0, 5).map((item: any) => <Aritsts item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
        </Stack>
      }
    </Layout>
  )
}
