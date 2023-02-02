import Stack from '@mui/material/Stack'
import React, { useContext, useState } from 'react'
import Typography from '@mui/material/Typography'
import { songContext } from '@/contexts/songContext';

interface IProps {
    images: string,
    image: string,
    i: any
}

const map: any = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "jul",
    8: "aug",
    9: "sep",
    10: "oct",
    11: "nov",
    12: "dec",
}

const SongItem: React.FC<IProps> = ({ images, image, i }) => {
    const { changeSong } = useContext(songContext)
    const handleClick = () => {
        changeSong({ image: i?.track?.album?.images[0]?.url, uri: i?.track?.preview_url, artist: i?.track?.artists[0].name, songName: i?.track?.name })
    }

    return (
        <li className='lis'>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center' }} onDoubleClick={handleClick}>
                <img src={images || image} style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                <Typography sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'left' }} >{i.track.name}</Typography>
            </Stack>
            <Stack sx={{ flexDirection: 'row', gap: "14px", alignItems: 'center', position: 'absolute', left: '42.3%' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'left' }} >{i.added_at.split(":").join("").split("T")[0].split('-')[2]} {`${map[i.added_at.split(":").join("").split("T")[0].split('-')[1].startsWith('0') ? i.added_at.split(":").join("").split("T")[0].split('-')[1].slice(1) : i.added_at.split(":").join("").split("T")[0].split('-')[1]]}`} {i.added_at.split(":").join("").split("T")[0].split('-')[0]} y</Typography>
            </Stack>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', width: '120px' }} >0{Math.floor((i.track.duration_ms / 1000 / 60) << 0)} : {Math.floor((i.track.duration_ms / 1000) % 60) < 10 ? `0${Math.floor((i.track.duration_ms / 1000) % 60)}` : Math.floor((i.track.duration_ms / 1000) % 60)}</Typography>
        </li>
    )
}

export default SongItem
