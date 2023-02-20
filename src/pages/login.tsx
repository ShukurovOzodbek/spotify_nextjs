import SVGIcons from '@/components/SVGIcons'
import { Button, Stack, Link } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const login = () => {
    const CLIENT_ID = "4109f1d797b647deb42f11dd69907b49"
    const REDIRECT_URI = "http://localhost:3000/login"
    // const REDIRECT_URI = "https://cln-spotify.netlify.app/login"
    var state = 16

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + CLIENT_ID
    url += '&scope=' + 'playlist-modify-public playlist-modify-private'
    url += '&redirect_uri=' + REDIRECT_URI
    url += '&state=' + state

    const AUTH_ENDPOINT = url
    const RESPONSE_TYPE = "token"
    
    const [token, setToken] = useState("")    
    const router = useRouter()

    const getToken = () => {
        let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        let token: any = urlParams.get('access_token');
    }

    useEffect(() => {
        const hash: any = window.location.hash
        let token: any = window.localStorage.getItem("token")

        getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find((elem: any) => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    useEffect(() => {
        let storage = localStorage.getItem('token')
        if(storage) {
            router.push('/')
        }else {}
    }, [])

    return (
        <Stack sx={{ width: '100%', background: 'black', height: '100vh', display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center', alignItems: 'center' }}>
            <SVGIcons icon='logo' />
            <Link sx={{ textDecoration: 'none'}} href={url}>
                <Button variant='contained' sx={[{ width: '200px', padding: '13px', color: 'white', background: '#1DB954' }, {'&:hover': {background: '#10A043'}}]}>
                    Login To Spotify
                </Button>
            </Link>
        </Stack>
    );
}

export default login
