import React from 'react'
import { Stack, Typography, Button } from "@mui/material"
import SVGIcons from '@/components/SVGIcons'
import Link from 'next/link'

const error = () => {
  return (
    <Stack sx={{ width: '100%', height: '100vh', background: 'black', color: 'white', display: "flex", justifyContent: 'center', alignItems: 'center', gap: "25px" }}>
      <SVGIcons icon='logo' width="300px" height='90px' />
      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: '7px', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '45px', fontWeight: '700' }}>Page Not Found</Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: '500', }}>We cannot find this page</Typography>
      </Stack>
      <Link style={{ textDecoration: 'none' }} href={`/`}>
        <Button variant='contained' sx={[{ width: '200px', fontWeight: '400', padding: '13px', marginTop: '20px', color: 'white', background: '#1DB954' }, { '&:hover': { background: '#10A043' } }]}>
          Home
        </Button>
      </Link>
    </Stack>
  )
}

export default error
