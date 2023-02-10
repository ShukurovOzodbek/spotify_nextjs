import Layout from '@/Layouts/Layout'
import BestMixes from '@/components/BestMixes'
import { Stack } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const category = () => {
    const [data, setData] = React.useState([])
    const router = useRouter()
    const id = router.asPath.split('/')[2]
    useEffect(() => {
        let token = localStorage.getItem('token')
        let obj = { token, id }
        async function fetching() {
            const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=UZ&offset=1&limit=50`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setData(data.playlists.items)
        }
        fetching()
    }, [id])

    return (
        <Layout>
            <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
                {
                    data.map((item: any, index: number) => <BestMixes item={item} key={index} />)
                }
            </Stack>
        </Layout>
    )
}

export default category
