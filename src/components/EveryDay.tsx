import { Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react'
import { type } from 'os';
import Link from 'next/link';

interface Props {
  item: any
}

const EveryDay: React.FC<Props> = ({ item }) => {
  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'
  return (
    <Link href={`/playlists/${item.id}`} style={{ width: '32%', textDecoration: 'none', color: 'white' }} >
      <Stack sx={[{ width: '100%', position: "relative", alignItems: "center", flexDirection: "row", borderRadius: '10px', overflow: 'hidden', maxHeight: "75px", background: "rgba(255, 255, 255, 0.1);", cursor: 'pointer', transition: ".3s ease" }, { '&:hover': { background: "rgba(255, 255, 255, 0.2);" } }]}>
        <Stack sx={{ width: '75px', height: '75px' }}>
          <img src={!item.images[0]?.url ? image : item.images[0]?.url} style={{ width: "100%" }} alt="" />
        </Stack>
        <Stack sx={{ padding: '25px' }}>
          <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>{item.name}</Typography>
        </Stack>
        <Button variant='contained' sx={[{ borderRadius: "100%", position: 'absolute', right: "20px", padding: '10px', color: 'white', background: '#1DB954', minWidth: '0px', top: "20px", transition: ".3s ease", opacity: "0" }, { '&:hover': { background: '#10A043' } }]}>
          <PlayArrowIcon sx={{ color: 'black', fontSize: "30px" }} />
        </Button>
      </Stack>
    </Link>
  )
}

export default EveryDay
