import Layout from "@/Layouts/Layout";
import EveryDayMix from "@/components/EveryDayMix";
import { fetchAlbums, fetchPlaylists } from "@/store/features/albums/albumThunk";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { fetchCategories } from "@/store/features/categories/categoryThunk";
import axios from "axios";
import BestMixes from "@/components/BestMixes";
import EveryDay from "@/components/EveryDay";
import Categories from "@/components/Categories";

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch<any>()
  const albums = useSelector((state: any) => state.albums.albums)
  const categories = useSelector((state: any) => state.categories.categories)
  const playlists = useSelector((state: any) => state.albums.playlists)


  useEffect(() => {
    let token = localStorage.getItem('token')
    const obj = { token }
    let strg: any = localStorage.getItem('token')
    if (!strg) {
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
  }, [])

  return (
    <Layout>
      {
        playlists.length === 0 ? <Stack sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <div className="loading">
            <span className="blob1 blob"></span>
            <span className="blob2 blob"></span>
            <span className="blob3 blob"></span>
          </div>
        </Stack> : <Stack sx={{ width: '100%', height: "100%", padding: "20px 0px", gap: "10px" }}>
          <Stack sx={{ gap: '15px' }}>
            <Typography sx={{ fontSize: '28px', color: "white", textDecoration: 'none', fontWeight: '600' }} >Have a good day </Typography>
            <Stack sx={{ color: 'white', mb: "20px", gap: '24px', flexDirection: "row", flexWrap: 'wrap', width: '100%' }}>
              {
                playlists.slice(0, 6).map((item: any) => <EveryDay item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Albums that can be liked by you</Link>
            <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                albums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/categories" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Categories</Link>
            <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                categories.slice(0, 5).map((item: any) => <Categories item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Recently Listened</Link>
            <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                albums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Popular Artists</Link>
            <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                albums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
          <Stack sx={{ gap: '15px', mb: "20px" }}>
            <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Who likes Miyagi</Link>
            <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
              {
                albums.slice(0, 5).map((item: any) => <BestMixes item={item} key={item.name} />)
              }
            </Stack>
          </Stack>
        </Stack>
      }
    </Layout>
  )
}
