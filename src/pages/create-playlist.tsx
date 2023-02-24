import Layout from '@/Layouts/Layout'
import { Button, Stack, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SVGIcons from '@/components/SVGIcons'
import { useDispatch, useSelector } from 'react-redux'
import SearchTrack from '@/components/SearchTracks'
import { fetchTracks } from '@/store/features/tracks/tracksThunk'
import axios from 'axios'
import AlbumSongItem from '@/components/AlbumSongItem'
import { playlistContext } from '@/contexts/playlistContext'

const createplaylist = () => {
    const [myData, setMyData] = useState([])
    const [names, setNames] = useState<any>('')
    const [length, setLength] = useState<any>(0)
    const [playlist, setPlaylist] = useState<any>({})
    const [search, setSearch] = useState([])
    const [show, setShow] = useState<any>(false)
    const [valueName, setValueName] = useState<any>('')

    const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
    const router = useRouter()
    const { value } = useContext(playlistContext)
    const id = router.asPath.split('/')[2]
    const img = useRef(null)
    const data: any = myData[0]
    const images = data?.track.album.images[0].url
    const name = data?.track.album.name

    const myTracks = useSelector((state: any) => state.tracks.tracks)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        setPlaylist(value)

        const token: any = localStorage.getItem('token')

        let inp: any = document.querySelector('.hel')
        inp.value = ''
        inp.onkeyup = () => {
            let searchKey = inp.value
            const obj = { token, searchKey }
            dispatch(fetchTracks(obj))
            setSearch(inp.value)
        }
        let name: any = localStorage.getItem('display_name')
        setNames(JSON.parse(name))
    }, [])

    useEffect(() => {
        let lis: any = document.querySelectorAll('.lis')
        setLength(lis.length)
    }, [])

    useEffect(() => {
        async function getAllAlbums() {
            let token = localStorage.getItem('token')
            await axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(res => {
                setMyData(res.data.items)
            }).catch((e) => {
            });
        }
        getAllAlbums()
    }, [search])

    async function submitFunc() {
        alert('Playlist created successfully')
        router.push('/')

        let token = localStorage.getItem('token')
        await axios.put(`https://api.spotify.com/v1/playlists/` + playlist.id, {
            "name": valueName,
            "description": "Updated playlist description",
            "public": true
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((res) => console.log(res.data))

    }

    return (
        <Layout background={images}>
            <Stack sx={{ transition: '.4s ease' }}>
                <Stack sx={{ gap: "20px", background: 'transparent', flexDirection: "row", alignItems: 'flex-end' }}>
                    <img ref={img} src={image} style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 8px 10px rgba(34, 60, 80, 0.07)', cursor: 'pointer' }} alt="" />
                    <Stack sx={{ width: '81%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Stack>
                            <Typography sx={{ color: "White", fontWeight: "700", fontSize: '18px' }}>Open playist</Typography>
                            <Typography onClick={() => setShow(true)} sx={{ display: show ? 'none' : 'block', color: "White", fontWeight: "700", fontSize: '62px', cursor: "pointer" }}>New Playlist</Typography>
                            <input onChange={(e) => setValueName(e.target.value)} style={{ color: "white", display: show ? 'block' : 'none', fontWeight: "700", fontSize: '62px', cursor: "pointer", background: 'transparent', border: 'none', outline: 'none', paddingTop: '11px', paddingBottom: '11px' }} type="text" defaultValue={'New Playlist'} />
                            <Typography sx={{ color: 'white', fontWeight: "500", fontSize: '20px' }} >{names} : {length} tracks </Typography>
                        </Stack>
                        <Button onClick={() => {
                            submitFunc()
                        }} sx={[{ borderRadius: '30px', minWidth: '150px', color: 'white', border: '1px solid white' }, {
                            '&:hover': {
                                background: 'white',
                                color: 'black'
                            }
                        }]}>
                            Create a playlist
                        </Button>
                    </Stack>
                </Stack>
                <Stack sx={{ width: '100%', paddingTop: "30px" }}>
                    <ol>
                        <Stack sx={{ width: '97%', marginLeft: "12px", paddingTop: '20px', borderTop: '1px solid #c4c4c4' }}>
                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                                <SVGIcons icon="search2" />
                                <input type="text" className='hel' placeholder='Tracks or podcasts' style={{ width: '300px', padding: "8px 32px", fontSize: "16px", borderRadius: '5px', outline: "none", border: 'none' }} />
                            </Stack>
                            <Stack>
                                {
                                    myTracks.map((i: any, index: number) => <SearchTrack image={image} images={i?.album?.images[0]?.url} i={i} id={playlist.id} width={'55px'} key={index} />)
                                }
                            </Stack>
                            <Stack>
                                <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px", textDecoration: 'none' }}>Tracks</Typography>
                                {
                                    myData.map((i: any, index: number) => <AlbumSongItem image={image} images={i?.track?.album?.images[0]?.url} i={i} width={'55px'} key={index} />)
                                }
                            </Stack>
                        </Stack>
                    </ol>
                </Stack>
            </Stack>
        </Layout>
    )
}

export default createplaylist
