import Typography from '@mui/material/Typography'
import React from 'react'
import SVGIcons from './SVGIcons'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
    item: any
}

const Links: React.FC<Props> = ({ item }) => {

    const router = useRouter()

    return (
        <Link style={{ display: 'flex', alignItems: 'center', opacity: router.pathname === item.path ? '1' :'0.4', gap: "10px", color: 'white', textDecoration: 'none', transition: '.3s ease' }} href={item.path}>
            <SVGIcons icon={item.svg} />
            <Typography sx={{ fontSize: '19px' }}>{item.text}</Typography>
        </Link>
    )
}

export default Links
