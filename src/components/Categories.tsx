import Link from 'next/link';
import React from 'react'
import { Stack, Typography } from "@mui/material"
interface IProps {
    item: any
}

const Categories: React.FC<IProps> = ({ item }) => {
    return (
        <Link href={`/categories/${item.id}`} style={{ width: '17.6%', textDecoration: 'none', color: 'white'  }}>
            <Stack sx={[{ width: '100%', minHeight: '270px', position: "relative", borderRadius: '10px', height: '100%', overflow: 'hidden', background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease", padding: "13px", gap: "10px", justifyContent: 'space-between' }, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
                <img src={item.icons[0].url} style={{ width: "100%", borderRadius: '10px' }} alt="" />
                <Stack sx={{ gap: "10px" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "gray" }}></Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default Categories
