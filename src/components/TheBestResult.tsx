import { songContext } from '@/contexts/songContext'
import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
interface IProps {
    i: any
}


const TheBestResult: React.FC<IProps> = ({ i }) => {
    const { changeSong } = useContext(songContext)
    const handleClick = () => {
        changeSong({ image: i?.album?.images[0]?.url, uri: i?.preview_url, artist: i?.artists[0].name, songName: i?.name })
    }

    return (
        <Stack onClick={handleClick} sx={[{ width: '100%', gap: "22px", padding: '19.4px', cursor: 'pointer', background: '#242424', borderRadius: "10px", transition: ".2s" }, { '&:hover': { background: "#2e2e2e" } }]}>
            <img width={'100%'} src={i?.album?.images[0]?.url} alt="" />
            <Stack sx={{ gap: '5px' }}>
                <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: "500" }}>{i?.name}</Typography>
                <Stack sx={{ flexDirection: 'row', gap: "10px", color: "#999999" }}>
                    {
                        i?.artists.map((item: any) => <Typography sx={{ fontSize: "13px" }}>{item?.name},</Typography>)
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TheBestResult
