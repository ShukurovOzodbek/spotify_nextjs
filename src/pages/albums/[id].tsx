import Layout from '@/Layouts/Layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const currentAlbum = () => {
  const router = useRouter()
  useEffect(() => {
    console.log(router);
  }, [])
  return (
    <Layout>
        <h1>Hello</h1> 
    </Layout>
  )
}

export default currentAlbum
