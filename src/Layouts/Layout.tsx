import React, { FC, useEffect, useState, useContext } from 'react'
import { Stack } from '@mui/material'
import SVGIcons from '@/components/SVGIcons'
import Links from '@/components/Links'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useRouter } from 'next/router'
import AudioPlayer from 'react-h5-audio-player';
import { songContext } from '@/contexts/songContext'

interface Props {
    children: JSX.Element
    background?: string
}
const linksArr = [
    {
        path: "/",
        svg: "home",
        text: "Home"
    },
    {
        path: "/search",
        svg: "search",
        text: "Search"
    },
    {
        path: "/library",
        svg: "library",
        text: "Library"
    }
]

const liked = {
    path: "/liked",
    svg: "liked",
    text: "Liked"
}

interface IArg {
    path: string,
    svg: string,
    text: string
}

const Layout: FC<Props> = ({ children, background }) => {
    const [name, setName] = React.useState("")
    const [myData, setMyData] = React.useState([])
    const [images, setImages] = useState("")
    const [value, setValue] = useState<any>({})
    const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
    const router = useRouter()

    const { val } = useContext(songContext)

    useEffect(() => {
        setValue(val)
    }, [val])

    useEffect(() => {
        let doc: any = document.querySelector('audio')
        doc.preload = "none"
        doc.autostart = "false"
        doc.autostart = '0'
        // autostart="0" autostart="false" preload ="none"    
    }, [])

    useEffect(() => {
        async function set() {
            let token = localStorage.getItem('token')
            await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
                .then(res => {
                    setName(res.data.display_name)
                    setImages(res?.data?.images[0]?.url)
                })
        }
        set()
    }, [])

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
        <Stack sx={{ width: "100%", height: '100vh', flexDirection: 'row' }} >
            <Stack sx={{ width: '17%', height: '100%', padding: '0 30px', display: 'flex', gap: "20px", background: 'black' }}>
                <Link href="/">
                    <SVGIcons icon="logo" width="165px" height="100px" />
                </Link>
                <Stack sx={{ gap: '15px', width: "100%" }}>
                    {
                        linksArr.map((i: IArg) => <Links item={i} key={i.svg} />)
                    }
                </Stack>
                <Links item={liked} mt='20px' />
                <Stack sx={{ width: '100%', borderBottom: '1px solid gray' }}></Stack>
                <Stack sx={{ gap: "10px" }}>
                    {
                        myData.map((item: any) => <Link style={{ color: "white", textDecoration: 'none', fontWeight: '400', opacity: router.asPath.split('/')[2] === item.id ? '1' : '0.4' }} href={`/playlists/${item.id}`} key={item.id} >{item.name}</Link>)
                    }
                </Stack>
            </Stack>
            <Stack sx={{ zIndex: "1000", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '90px', width: "100%", color: "white", bottom: "0", left: '0', right: "0", position: 'absolute', padding: "15px 25px", background: "black" }}>
                <Stack sx={{ flexDirection: 'row', width: '200px', alignItems: 'center', gap: "10px" }}>
                    <img src={value.image || image} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} alt="" />
                    <Stack>
                        <Typography sx={{ lineHeight: '18px', }} > {value.songName} </Typography>
                        <Typography sx={{ lineHeight: '18px', fontSize: '14px', color: '#999999' }}>{value.artist}</Typography>
                    </Stack>
                </Stack>
                <AudioPlayer
                    src={value.uri}
                />
                <Stack>
                </Stack>
            </Stack>
            <Stack sx={{ width: '83%', height: '100vh', background: 'linear-gradient(180deg, #1E1E1E 40%, #000000 100%)' }}>
                <Stack sx={{ justifyContent: "space-between", flexDirection: "row", alignItems: 'center', width: '100%', padding: '50px 25px', height: '10%' }}>
                    <Stack sx={{ flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Button sx={[{ fontSize: '16px', borderRadius: '100%', background: 'gray', width: '0px', height: '0px', padding: '15px', minWidth: '0px' }, { '&:hover': { background: 'black' } }]} onClick={() => window.history.go(-1)} variant='contained'>{"<"}</Button>
                            <Button sx={[{ fontSize: '16px', borderRadius: '100%', background: 'black', width: '0px', height: '0px', padding: '15px', minWidth: '0px' }, { '&:hover': { background: 'gray' } }]} onClick={() => window.history.go(+1)} variant='contained'>{">"}</Button>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', position: 'relative', display: router.pathname === "/search" ? 'block' : 'none' }}>
                            <SVGIcons icon="search2" />
                            <input type="text" placeholder='Artists, songs, or podcasts' style={{ width: '300px', padding: "8px 32px", fontSize: "16px", borderRadius: '30px', outline: "none", border: 'none' }} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', width: '150px', padding: '3px', alignItems: 'center', borderRadius: "40px", background: 'black', gap: "10px", cursor: 'pointer' }}>
                        <Box sx={{ width: '40px', height: '40px', borderRadius: '100%', overflow: 'hidden', background: "gray" }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={images || image} alt="profile" />
                        </Box>
                        <Stack>
                            <Typography sx={{ color: 'white', fontSize: '13px' }}>{name}</Typography>
                            <Typography sx={{ color: 'gray', mt: '-3px', fontStyle: "italic", fontSize: '13px' }}>PremiumUser</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ width: '100%', padding: '10px 25px 0 25px', height: '75%', overflowY: 'scroll' }}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Layout
