import { Stack, Typography } from '@mui/material'
import React from 'react'
interface IProps {
    i: any
}


const TheBestResult: React.FC<IProps> = ({ i }) => {
    return (
        <Stack sx={[{ width: '100%', gap: "22px", padding: '19.4px', cursor: 'pointer', borderRadius: "10px", background: "rgba(255, 255, 255, 0.1);", transition: ".2s" }, { '&:hover': { background: "rgba(255, 255, 255, 0.2)" } }]}>
            <img width={'100%'} src={i?.album?.images[0]?.url} alt="" />
            <Stack sx={{ gap: '5px' }}>
                <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: "500" }}>{i?.name}</Typography>
                <Stack sx={{ flexDirection: 'row', gap: "10px", color: "#999999" }}>
                    {
                        i?.artists.map((item:any) => <Typography sx={{ fontSize: "13px" }}>{ item?.name },</Typography>)
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TheBestResult
