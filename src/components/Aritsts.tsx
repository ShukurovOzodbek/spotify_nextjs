import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface IProps {
    item: any
}

const Aritsts: React.FC<IProps> = ({ item }) => {
    const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'

    return (
        <Link href={`/artists/${item.id}`} style={{ width: '17.6%', textDecoration: 'none', color: 'white' }}>
            <Stack sx={[{ width: '100%', height: '250px', position: "relative", borderRadius: '10px', overflow: 'hidden', background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease", padding: "13px", justifyContent: 'space-between'}, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
                <img src={item?.images[0]?.url || image} style={{ width: "100%", objectFit: 'cover', borderRadius: '100%', height: '180px' }} alt="" />
                <Stack sx={{ gap: "10px" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "gray" }}></Typography>
                </Stack>
            </Stack>
        </Link>
    )
}


export default Aritsts