import React from 'react'
import Layout from '@/Layouts/Layout'
import { Stack, Link } from '@mui/material'
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
                <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Albums that can be liked by you</Link>
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
