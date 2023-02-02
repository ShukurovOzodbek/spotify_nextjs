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

    const handleClick = () => {
        changeSong({ image: images, uri: i?.preview_url, artist: i?.artists[0].name, songName: i?.name })
    }
    
    return (
        <li className='lis'>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center' }} onDoubleClick={handleClick}>
                <img src={images || image} style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                <Typography sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'left' }} >{i.name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', width: '120px' }} >0{Math.floor((i.duration_ms / 1000 / 60) << 0)} : {Math.floor((i.duration_ms / 1000) % 60) < 10 ? `0${Math.floor((i.duration_ms / 1000) % 60)}` : Math.floor((i.duration_ms / 1000) % 60)}</Typography>
        </li>
    )
}

export default AlbumSongItem
