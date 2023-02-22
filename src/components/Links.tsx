import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import SVGIcons from './SVGIcons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

interface Props {
    item: any
    mt?: string
    id?: number | string
    clas?: any
}

const Links: React.FC<Props> = ({ item, mt, clas }) => {

    const router = useRouter()

    useEffect(() => {
        let a: any = document.querySelector('.a')
        let token = localStorage.getItem('token')
        a.onclick = async () => {
            await axios.post("https://api.spotify.com/v1/users/31odxqa66wuuaaq7wzuzfoxkzqkq/playlists", {
                "name": "New Playlist",
                "public": false,
                "description": "New playlist description",
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                localStorage.setItem('playlist_obj', JSON.stringify(res.data))
            })
        }
    }, [])

    return (
        <Link className={clas} style={{ display: 'flex', alignItems: 'center', opacity: router.pathname === item.path ? '1' : '0.4', gap: "10px", color: 'white', textDecoration: 'none', transition: '.3s ease', marginTop: mt }} href={item.path}>
            <SVGIcons icon={item.svg} />
            <Typography sx={{ fontSize: '17px' }}>{item.text}</Typography>
        </Link>
    )
}

export default Links
