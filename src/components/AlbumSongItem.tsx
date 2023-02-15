import Stack from '@mui/material/Stack'
import React, { useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { songContext } from '@/contexts/songContext';

interface IProps {
    images: string,
    image: string,
    i: any
    width?: string
}

const AlbumSongItem: React.FC<IProps> = ({ images, image, i, width }) => {
    const { changeSong } = useContext(songContext)
    const [duration_ms, setDuration_ms] = useState(i.duration_ms || i.track.duration_ms)
    const [uri, setUri] = useState()
    const [artist, setArtist] = useState()
    const [songName, setSongName] = useState()


    const handleClick = () => {
        console.log(i);
        changeSong({ image: images, uri, artist, songName })
    }

    useEffect(() => {
        if (i?.track?.preview_url) {
            setUri(i?.track.preview_url)
            setArtist(i?.track.artists[0]?.name)
            setSongName(i.track.name)
        } else if (i.preview_url) {
            setUri(i?.preview_url)
            setArtist(i?.artists[0]?.name)
            setSongName(i.name)
        }
    }, [i])

    return (
        <li className='lis'>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center' }} onDoubleClick={handleClick}>
                <img src={images || image} style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                <Typography sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'left' }} >{i.name || i.track.name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', width: width ? width : '120px' }} >{
                Math.floor((duration_ms / 1000 / 60) << 0)} : {Math.floor((duration_ms / 1000) % 60) < 10 ? `0${Math.floor((duration_ms / 1000) % 60)}` : Math.floor((duration_ms / 1000) % 60)
                }</Typography>
        </li>
    )
}

export default AlbumSongItem
