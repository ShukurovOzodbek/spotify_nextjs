import Layout from '@/Layouts/Layout'
import Categories from '@/components/Categories'
import { fetchCategories } from '@/store/features/categories/categoryThunk'
import { Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
  const dispatch = useDispatch<any>()
  const data = useSelector((state: any) => state.categories.categories)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (data.length === 0) {
      dispatch(fetchCategories({ token }))
    }
  })

  return (
    <Layout>
      <Stack sx={{ width: "100%", color: 'white', gap: '10px', mb: "20px", flexDirection: "row", flexWrap: 'wrap' }}>
        <Typography sx={{ fontSize: '24px' }}>All Categories</Typography>
        <Stack sx={{ width: "100%", color: 'white', mb: "20px", gap: '30px', flexDirection: "row", flexWrap: 'wrap' }}>
          {
            data.map((item: any) => <Categories item={item} key={item.name} />)
          }
        </Stack>
      </Stack>
    </Layout>
  )
}

export default index
