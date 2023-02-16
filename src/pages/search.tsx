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
import albums from './albums'
import BestMixes from '@/components/BestMixes'
import Aritsts from '@/components/Aritsts'

const search = () => {
  const [inp, setInp] = useState<any>("")

  const data = useSelector((state: any) => state.tracks.tracks)
  const categories = useSelector((state: any) => state.categories.categories)
  const foundAlbums = useSelector((state: any) => state.albums.foundAlbums)
  const foundAritsts = useSelector((state: any) => state.albums.foundAritsts)

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
      <Stack sx={{ width: "100%", gap: "40px" }}>
        {
          inp.length === 0 ? returnAll() :
            <>
              <Stack sx={{ width: '100%', flexDirection: 'row', gap: "20px" }}>
                <Stack sx={{ width: '17%', gap: '10px' }}>
                  <Typography sx={{ fontSize: '24px', color: 'white' }}>The best result</Typography>
                  <TheBestResult i={data[0]} />
                </Stack>
                <Stack sx={{ width: '80%', gap: '10px' }}>
                  <Typography sx={{ fontSize: '24px', color: 'white' }}>Tracks</Typography>
                  <Stack sx={{ width: '100%', gap: "19px" }}>
                    {
                      data.slice(0, 4).map((i: any, index: number) => <AlbumSongItem image={image} images={i?.album?.images[0]?.url} i={i} width={'55px'} key={index} />)
                    }
                  </Stack>
                </Stack>
              </Stack>
              <Stack sx={{ gap: '10px' }}>
                <Typography sx={{ fontSize: '24px', color: 'white' }}>Albums</Typography>
                <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
                  {
                    foundAlbums.map((i: any, index: number) => <BestMixes item={i} key={index} />)
                  }
                </Stack>
              </Stack>
              <Stack sx={{ gap: '10px' }}>
                <Typography sx={{ fontSize: '24px', color: 'white' }}>Artists</Typography>
                <Stack sx={{ color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
                  {
                    foundAritsts.map((i: any, index: number) => <Aritsts item={i} key={index} />)
                  }
                </Stack>
              </Stack>
            </>
        }
      </Stack>
    </Layout>
  )
}

export default search
