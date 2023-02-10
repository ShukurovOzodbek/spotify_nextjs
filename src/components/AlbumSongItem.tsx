import Stack from '@mui/material/Stack'
import React, { useContext, useState } from 'react'
import Typography from '@mui/material/Typography'
import { songContext } from '@/contexts/songContext';

interface IProps {
    images: string,
    image: string,
    i: any
}

const AlbumSongItem: React.FC<IProps> = ({ images, image, i }) => {
    const { changeSong } = useContext(songContext)
    const [ duration_ms, setDuration_ms ] = useState(i.duration_ms || i.track.duration_ms)
    const [uri, setUri] = useState(i?.preview_url || i?.track.preview_url)
    const [artist, setArtist] = useState(i?.artists[0]?.name || i?.track.artists[0]?.name)
    const [songName, setSongName] = useState(i.track.name || i?.name)

    
    const handleClick = () => {
        console.log(i);
        changeSong({ image: images, uri, artist, songName })
    }

    return (
        <li className='lis'>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center' }} onDoubleClick={handleClick}>
                <img src={images || image} style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                <Typography sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'left' }} >{i.name || i.track.name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', width: '120px' }} >{
                Math.floor((duration_ms / 1000 / 60) << 0)} : {Math.floor((duration_ms / 1000) % 60) < 10 ? `0${Math.floor((duration_ms / 1000) % 60)}` : Math.floor((duration_ms / 1000) % 60)
                }</Typography>
        </li>
    )
}

export default AlbumSongItem
