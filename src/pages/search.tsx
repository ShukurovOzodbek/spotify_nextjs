import Layout from '@/Layouts/Layout'
import React from 'react'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'

const search = () => {
  const data = useSelector((state:any) => state.tracks.tracks)

  console.log(data);

  return (
    <Layout>
      <Stack sx={{ width: "100%" }}>  
        
      </Stack>
    </Layout>
  )
}

export default search
