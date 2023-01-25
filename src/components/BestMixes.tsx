import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react'

const BestMixes = () => {
    return (
        <Stack sx={[{ width: '18%', height: '300px', position: "relative", borderRadius: '10px', overflow: 'hidden', background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease", padding: "20px", gap: "10px" }, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
            <img src="https://i1.sndcdn.com/artworks-000446065350-6k6hrf-t500x500.jpg" style={{ width: "100%", borderRadius: '10px' }} alt="" />
            <Stack sx={{ gap: "5px" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>Name Of Song</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "gray" }}>Ганвест</Typography>
            </Stack>
            <Button variant='contained' sx={[{ borderRadius: "100%", position: 'absolute', right: "25px", padding: '10px', color: 'white', background: '#1DB954', minWidth: '0px', bottom: "105px", transition: ".3s ease", opacity: "0" }, { '&:hover': { background: '#10A043' } }]}>
                <PlayArrowIcon sx={{ color: 'black', fontSize: "30px" }} />
            </Button>
        </Stack>
    )
}

export default BestMixes
