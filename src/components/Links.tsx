import Typography from '@mui/material/Typography'
import React, { useContext, useEffect } from 'react'
import SVGIcons from './SVGIcons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { playlistContext } from '@/contexts/playlistContext'

interface Props {
    item: any
    mt?: string
    id?: number | string
    clas?: any
}

const Links: React.FC<Props> = ({ item, mt, clas }) => {

    const router = useRouter()

    const { changeAddPlaylist } = useContext(playlistContext)

    useEffect(() => {
        let a: any = document.querySelector('.a')
        let token = localStorage.getItem('token')
        a.onclick = async () => {
            await axios.post(`https://api.spotify.com/v1/users/${item.id}/playlists`, {
                "name": "New Playlist",
                "public": false,
                "description": "New playlist description",
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                changeAddPlaylist(res.data);
                console.log(res.data);                
            })
        }
    }, [item.id])

    return (
        <Link className={clas} style={{ display: 'flex', alignItems: 'center', opacity: router.pathname === item.path ? '1' : '0.4', gap: "10px", color: 'white', textDecoration: 'none', transition: '.3s ease', marginTop: mt }} href={item.path}>
            <SVGIcons icon={item.svg} />
            <Typography sx={{ fontSize: '17px' }}>{item.text}</Typography>
        </Link>
    )
}

export default Links
