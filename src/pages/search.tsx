import Layout from '@/Layouts/Layout'
import React, { useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import AlbumSongItem from '@/components/AlbumSongItem'
import TheBestResult from '@/components/TheBestResult'
import Categories from '@/components/Categories'
import { fetchCategories } from '@/store/features/categories/categoryThunk'
import Link from 'next/link'

const search = () => {
  const [inp, setInp] = useState<any>("")

  const data = useSelector((state: any) => state.tracks.tracks)
  const categories = useSelector((state: any) => state.categories.categories)

  const dispatch = useDispatch<any>()

  const image = 'https://i.ytimg.com/vi/pvlakjE8h6Q/maxresdefault.jpg'

  useEffect(() => {
    let input: any = document.querySelector('.input')
    setInp(input.value)

    let token = localStorage.getItem('token')
    const obj = { token }
    if (categories.length === 0) {
      dispatch(fetchCategories(obj))
    }
  }, [data])

  const returnAll = () => {
    return (
      <Stack sx={{ gap: "10px и " }}>
        <Link style={{ textDecoration: 'none' }} href="/categories">
          <Typography sx={{ color: "white", fontSize: "24px" }}>Genres made for you</Typography>
        </Link>
        <Stack sx={{ width: "102%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
          {
            categories.slice(20).map((item: any) => <Categories item={item} key={item.name} />)
          }
        </Stack>
      </Stack>
    )
  }

  return (
    <Layout>
      <Stack sx={{ width: "100%" }}>
        {
          inp.length === 0 ? returnAll() : <Stack sx={{ width: '100%', flexDirection: 'row', gap: "20px" }}>
            <Stack sx={{ width: '17%', gap: '10px' }}>
              <Typography sx={{ fontSize: '20px', color: 'white' }}>The best result</Typography>
              <TheBestResult i={data[0]} />
            </Stack>
            <Stack sx={{ width: '80%', gap: '10px' }}>
              <Typography sx={{ fontSize: '20px', color: 'white' }}>Tracks</Typography>
              <Stack sx={{ width: '100%', gap: "19px" }}>
                {
                  data.slice(0, 4).map((i: any, index: number) => <AlbumSongItem image={image} images={i?.album?.images[0]?.url} i={i} width={'55px'} key={index} />)
                }
              </Stack>
            </Stack>
          </Stack>
        }
      </Stack>
    </Layout>
  )
}

export default search
