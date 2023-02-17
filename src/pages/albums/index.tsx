import React from 'react'
import Layout from '@/Layouts/Layout'
import { Stack, Typography } from '@mui/material'
import BestMixes from '@/components/BestMixes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '@/store/features/albums/albumThunk'

const albums = () => {
    const distpatch = useDispatch<any>()
    const data = useSelector((state: any) => state.albums.albums)

    React.useEffect(() => {
        let token = localStorage.getItem('token')
        const obj = { token }
        if(data.length === 0) {
            distpatch(fetchAlbums(obj))
        }
    }, [])

    return (
        <Layout>
            <Stack sx={{ gap: '15px', mb: "20px" }}>
                <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: '900', lineHeight: "70px" }}>Albums that can be liked by you</Typography>
                <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
                    {
                        data.map((item: any) => <BestMixes item={item} key={item.name} />)
                    }
                </Stack>
            </Stack>
        </Layout>
    )
}

export default albums
