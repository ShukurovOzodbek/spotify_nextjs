import React from 'react'
import { Stack } from '@mui/material'
import EveryDay from './EveryDay'

interface Props {
    arr: Array<{}>,
}

const EveryDayMix:React.FC<Props> = ({ arr }) => {
    return (
        <Stack sx={{ color: 'white', mb: "20px", gap: '24px', flexDirection: "row", flexWrap: 'wrap' }}>
            {
                arr.map((item: any) => <EveryDay item={item} key={item.name} />)
            }
        </Stack>
    )
}

export default EveryDayMix
