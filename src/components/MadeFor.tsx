import React from 'react'
import { Stack } from '@mui/material'
import BestMixes from './BestMixes'

interface Props{
  arr: Array<{}>,
}

const MadeFor:React.FC<Props> = ({ arr }) => {
  return (
    <Stack sx={{ color: 'white', mb: "20px", gap: '24px', flexDirection: "row", flexWrap: 'wrap', width: '100%' }}>
      {
        arr.map((item: any) => <BestMixes item={item} />)
      }
    </Stack>
  )
}

export default MadeFor
