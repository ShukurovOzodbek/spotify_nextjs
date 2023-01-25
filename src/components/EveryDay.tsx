import { Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react'

const EveryDay = () => {
  return (
    <Stack sx={[{ width: '32%', position: "relative", alignItems: "center", flexDirection: "row", borderRadius: '10px', overflow: 'hidden', maxHeight: "75px", background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease" }, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
      <img src="https://i1.sndcdn.com/artworks-000446065350-6k6hrf-t500x500.jpg" style={{ width: "75px" }} alt="" />
      <Stack sx={{ padding: '25px' }}>
        <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>Ганвест</Typography>
      </Stack>
      <Button variant='contained' sx={[{ borderRadius: "100%", position: 'absolute', right: "20px", padding: '10px', color: 'white', background: '#1DB954', minWidth: '0px', top: "20px", transition: ".3s ease", opacity: "0" }, { '&:hover': { background: '#10A043' } }]}>
        <PlayArrowIcon sx={{ color: 'black', fontSize: "30px" }} />
      </Button>
    </Stack>
  )
}

export default EveryDay
