import Layout from '@/Layouts/Layout'
import { Button, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import SVGIcons from '@/components/SVGIcons'
import { useDispatch, useSelector } from 'react-redux'
import SearchTrack from '@/components/SearchTracks'
import { fetchTracks } from '@/store/features/tracks/tracksThunk'
import axios from 'axios'

const createplaylist = () => {
    const [myData, setMyData] = useState([])
    const [names, setNames] = useState<any>('')
    const [length, setLength] = useState<any>(0)

    const [playlist, setPlaylist] = useState<any>({})
    const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
    const router = useRouter()
    const id = router.asPath.split('/')[2]
    const img = useRef(null)
    const data: any = myData[0]
    const images = data?.track.album.images[0].url
    const name = data?.track.album.name

    const myTracks = useSelector((state: any) => state.tracks.tracks)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        setMyData([])
        const token: any = localStorage.getItem('token')

        let inp: any = document.querySelector('.hel')
        inp.value = ''
        inp.onkeyup = () => {
            let searchKey = inp.value
            const obj = { token, searchKey }

            if (myTracks.length === 0) {
                dispatch(fetchTracks(obj))
            }
        }

        let name: any = localStorage.getItem('display_name')
        setNames(JSON.parse(name))
    }, [])

    useEffect(() => {
        let lis: any = document.querySelectorAll('.lis')
        setLength(lis.length)

        let a: any = localStorage.getItem('playlist_obj')
        let parse = JSON.parse(a)
        setPlaylist(parse)
    }, [])

    return (
        <Layout background={images}>
            <Stack sx={{ transition: '.4s ease' }}>
                <Stack sx={{ gap: "20px", background: 'transparent', flexDirection: "row", alignItems: 'flex-end' }}>
                    <img ref={img} src={images || image} style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 8px 10px rgba(34, 60, 80, 0.07)', cursor: 'pointer' }} alt="" />
                    <Stack sx={{ position: 'relative' }}>
                        <Typography sx={{ color: "White", fontWeight: "700", fontSize: '18px' }}>Open playist</Typography>
                        <Typography sx={{ color: "White", fontWeight: "700", fontSize: '62px', cursor: "Pointer" }}>{playlist?.name}</Typography>
                        <Typography sx={{ color: 'white', fontWeight: "500", fontSize: '20px' }} >{names} : {length} tracks </Typography>
                        <Button onClick={() => {
                            alert('Playlist created successfully')
                            router.push('/')
                        }} sx={[{ borderRadius: '30px', minWidth: '150px', color: 'white', border: '1px solid white', position: 'absolute', right: '-930px' }, {
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
                        </Stack>
                    </ol>
                </Stack>
            </Stack>
        </Layout>
    )
}

export default createplaylist
