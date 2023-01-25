import Layout from "@/Layouts/Layout";
import BestMixes from "@/components/BestMixes";
import EveryDay from "@/components/EveryDay";
import Main from "@/components/Main";
import { AppDispatch } from "@/store";
import { fetchTracks } from "@/store/features/tracks/trackThunk";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch<any>()
  const tracks = useSelector((state: any) => state.tracks.tracks)

  useEffect(() => {
    let token = localStorage.getItem('token')
    let searchKey = 'alone'
    const obj = { token, searchKey }
    if(tracks.length === 0) {
      dispatch(fetchTracks(obj))
    }
  }, [])
  useEffect(() => {
    let strg: any = localStorage.getItem('token')
    if (!strg) {
      router.push('/login')
    }
  }, [])

  return (
    <Layout>
      <Stack sx={{ width: '100%', height: "100%", padding: "20px 0px", gap: "10px" }}>
        <Stack sx={{ gap: '15px' }}>
          <Typography sx={{ fontSize: '28px', color: "white", textDecoration: 'none', fontWeight: '600' }} >Have a good day </Typography>
          <Stack sx={{ color: 'white', mb: "20px", gap: '24px', flexDirection: "row", flexWrap: 'wrap' }}>
            <Main component={<EveryDay />} />
            <Main component={<EveryDay />} />
            <Main component={<EveryDay />} />
            <Main component={<EveryDay />} />
            <Main component={<EveryDay />} />
            <Main component={<EveryDay />} />
          </Stack>
        </Stack>
        <Stack sx={{ gap: '15px', mb: "20px" }}>
          <Link href="/made-for" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Твои лучшие миксы</Link>
          <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
            <Main component={<BestMixes />} />
            <Main component={<BestMixes />} />
            <Main component={<BestMixes />} />
            <Main component={<BestMixes />} />
            <Main component={<BestMixes />} />
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}
