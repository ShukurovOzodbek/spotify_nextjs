import Typography from '@mui/material/Typography'
import React from 'react'
import SVGIcons from './SVGIcons'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
    item: any
    mt?: string
}

const Links: React.FC<Props> = ({ item, mt }) => {

    const router = useRouter()

    return (
        <Link style={{ display: 'flex', alignItems: 'center', opacity: router.pathname === item.path ? '1' :'0.4', gap: "10px", color: 'white', textDecoration: 'none', transition: '.3s ease', marginTop: mt }} href={item.path}>
            <SVGIcons icon={item.svg} />
            <Typography sx={{ fontSize: '17px' }}>{item.text}</Typography>
        </Link>
    )
}

export default Links
