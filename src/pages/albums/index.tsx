import React from 'react'
import Layout from '@/Layouts/Layout'
import { Stack, Link } from '@mui/material'
import MadeFor from '@/components/MadeFor'
import axios from 'axios'

const albums = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        async function getAllAlbums() {
            let token = localStorage.getItem('token')
            await axios.get("https://api.spotify.com/v1/browse/new-releases?country=UZ&limit=50&offset=1", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(res => {
                setData(res.data.albums.items)
                console.log(res.data.albums.items);
            })
        }
        getAllAlbums()
    }, [])
    return (
        <Layout>
            <Stack sx={{ gap: '15px', mb: "20px" }}>
                <Link href="/albums" sx={[{ fontSize: '24px', color: "white", textDecoration: 'none', fontWeight: '600' }, { '&:hover': { textDecoration: 'underline white' } }]}>Albums that can be liked by you</Link>
                <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
                    <MadeFor arr={data} />
                </Stack>
            </Stack>
        </Layout>
    )
}

export default albums
