import Layout from '@/Layouts/Layout'
import React, { useEffect } from 'react'
import { Typography, Stack } from '@mui/material'
import BestMixes from '@/components/BestMixes'
import MadeFor from '@/components/MadeFor'
import { getAlbums } from '@/composables/getAlbums'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '@/store/features/albums/albumThunk'

const madefor = () => {
    const albums = useSelector((state: any) => state.albums.albums)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        if(albums.length === 0) {
            let token = localStorage.getItem('token')
            let searchKey = 'Hattori'
            const obj = { token, searchKey }
            dispatch(fetchAlbums(obj))
        }
    }, [])

    return (
        <Layout>
            <Stack sx={{ width: '100%' }}>
                <Typography sx={{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }}>Favourite albums</Typography>
                <MadeFor arr={getAlbums(albums, 'all')} />
            </Stack>
        </Layout>
    )
}

export default madefor
