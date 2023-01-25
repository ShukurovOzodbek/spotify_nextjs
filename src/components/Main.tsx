import React from 'react'

interface Props {
    component: JSX.Element
}

const Main: React.FC<Props> = ({ component }) => {
    return (
        <>
            {component}
        </>
    )
}

export default Main;