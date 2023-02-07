import Layout from '@/Layouts/Layout'
import React from 'react'

const search = () => {
  React.useEffect(() => {
    let inp:any = document.querySelector('input')
    inp.focus()
  })
  return (
    <Layout>
        <h1>Search</h1>
    </Layout>
  )
}

export default search
