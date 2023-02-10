import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react'
import Link from 'next/link';

interface Props {
    item: any
}

const BestMixes: React.FC<Props> = ({ item }) => {
    return (
        <Link href={`/albums/${item.id}`} style={{ width: '17.6%', textDecoration: 'none', color: 'white' }}>
            <Stack sx={[{ width: '100%', height: '300px', position: "relative", borderRadius: '10px', overflow: 'hidden', background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease", padding: "13px", gap: "10px" }, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
                <img src={item.images[0].url} style={{ width: "100%", borderRadius: '10px' }} alt="" />
                <Stack sx={{ gap: "10px" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "gray" }}></Typography>
                </Stack>
                <Button variant='contained' sx={[{ borderRadius: "100%", position: 'absolute', right: "25px", padding: '10px', color: 'white', background: '#1DB954', minWidth: '0px', bottom: "95px", transition: ".3s ease", opacity: "0" }, { '&:hover': { background: '#10A043' } }]}>
                    <PlayArrowIcon sx={{ color: 'black', fontSize: "30px" }} />
                </Button>
            </Stack>
        </Link>
    )
}

export default BestMixes
