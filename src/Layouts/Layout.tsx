import React, { FC } from 'react'
import { Stack } from '@mui/material'
import SVGIcons from '@/components/SVGIcons'
import Links from '@/components/Links'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
    children: JSX.Element
}
const linksArr = [
    {
        path: "/",
        svg: "home",
        text: "Home"
    },
    {
        path: "/search",
        svg: "search",
        text: "Search"
    },
    {
        path: "/library",
        svg: "library",
        text: "Library"
    }
]

const liked = {
    path: "/liked",
    svg: "liked",
    text: "Liked"
}

interface IArg {
    path: string,
    svg: string,
    text: string
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Stack sx={{ width: "100%", height: '100vh', flexDirection: 'row' }} >
            <Stack sx={{ width: '17%', height: '100%', padding: '0 30px', display: 'flex', gap: "20px", background: 'black' }}>
                <Link href="/">
                    <SVGIcons icon="logo" width="165px" height="100px" />
                </Link>
                <Stack sx={{ gap: '15px', width: "100%" }}>
                    {
                        linksArr.map((i: IArg) => <Links item={i} key={i.svg} />)
                    }
                </Stack>
                <Stack sx={{ width: '100%', borderBottom: '1px solid gray', marginTop: '10px', marginBottom: '10px' }}></Stack>
                <Links item={liked} />
                <Stack sx={{ width: '100%', borderBottom: '1px solid gray', marginTop: '10px', marginBottom: '10px' }}></Stack>
            </Stack>
            <Stack sx={{ width: '83%', height: '100vh', background: 'linear-gradient(180deg, #1E1E1E 0%, #000000 100%)' }}>
                <Stack sx={{ justifyContent: "space-between", flexDirection: "row", alignItems: 'center', width: '100%', padding: '50px 25px', height: '10%' }}>
                    <Stack sx={{ flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Button sx={[{ fontSize: '16px', borderRadius: '100%', background: 'gray', width: '0px', height: '0px', padding: '15px', minWidth: '0px' }, { '&:hover': { background: 'black' } }]} variant='contained'>{"<"}</Button>
                            <Button sx={[{ fontSize: '16px', borderRadius: '100%', background: 'black', width: '0px', height: '0px', padding: '15px', minWidth: '0px' }, { '&:hover': { background: 'gray' } }]} variant='contained'>{">"}</Button>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <SVGIcons icon="search2" />
                            <input type="text" placeholder='Artists, songs, or podcasts' style={{ width: '300px', padding: "8px 32px", fontSize: "16px", borderRadius: '30px', outline: "none" }} />
                        </Stack>
                    </Stack>
                    <Link href={'/accaunt/settings'} style={{ textDecoration: 'none' }}>
                        <Stack sx={{ flexDirection: 'row', width: '150px', padding: '3px', alignItems: 'center', borderRadius: "40px", background: 'black', gap: "10px", cursor: 'pointer' }}>
                            <Box sx={{ width: '40px', height: '40px', borderRadius: '100%', overflow: 'hidden', background: "gray" }}>
                                <img style={{ width: '100%', height: '100%' }} src="https://i1.sndcdn.com/artworks-000446065350-6k6hrf-t500x500.jpg" alt="profile" />
                            </Box>
                            <Stack>
                                <Typography sx={{ color: 'white', fontSize: '13px' }}>DisplayName</Typography>
                                <Typography sx={{ color: 'gray', mt: '-3px', fontStyle: "italic", fontSize: '13px' }}>PremiumUser</Typography>
                            </Stack>
                        </Stack>
                    </Link>
                </Stack>
                <Stack sx={{ width: '100%', padding: '10px 25px 0 25px', height: '90%', overflowY: 'scroll' }}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Layout
