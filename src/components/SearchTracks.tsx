import Stack from '@mui/material/Stack'
import React, { useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchTracks } from '@/store/features/tracks/tracksThunk'
import { playlistContext } from '@/contexts/playlistContext'

interface IProps {
    images: string,
    image: string,
    i: any
    width?: string
    id: any
}

const SearchTrack: React.FC<IProps> = ({ images, image, i, id, width }) => {
    const [duration_ms, setDuration_ms] = useState(i.duration_ms || i.track.duration_ms)
    const dispatch = useDispatch<any>()
    
    const { value } = useContext<any>(playlistContext)
    let arr:any = []
    const addTrack = async (item: any, e: any) => {
        e.target.innerHTML = 'Added'
        let token = localStorage.getItem('token')
        arr = [...arr, item.uri]
        await axios.post(`https://api.spotify.com/v1/playlists/${value.id}/tracks`,
            {
                "uris": arr,
                "position": 0
            }
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then((res) => {
            })
        let inp: any = document.querySelector('.hel')
        inp.value = ''
        let searchKey = inp.value
        const obj = { token, searchKey }

        dispatch(fetchTracks(obj))
    }

    return (
        <li className='lis' style={{ position: "relative" }}>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center' }}>
                <img src={images || image} style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                <Typography sx={{ fontSize: '14px', fontWeight: '600', textAlign: 'left', color: 'white' }} >{i.name || i.track.name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: '14px', fontWeight: '400', width: width ? width : '120px', position: 'absolute', right: "20%", }} >{
                Math.floor((duration_ms / 1000 / 60) << 0)} : {Math.floor((duration_ms / 1000) % 60) < 10 ? `0${Math.floor((duration_ms / 1000) % 60)}` : Math.floor((duration_ms / 1000) % 60)
                }</Typography>
            <Button id="add_btn" onClick={(e) => addTrack(i, e)} sx={[{ borderRadius: '30px', width: '150px', color: 'white', border: '1px solid white' }, {
                '&:hover': {
                    background: 'white',
                    color: 'black'
                }
            }]}>
                Add
            </Button>
        </li>
    )
}

export default SearchTrack
