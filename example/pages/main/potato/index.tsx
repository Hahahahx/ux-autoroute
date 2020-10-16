import React from 'react'
import { useRoute } from '../../../../src/Routers';

const Potato =()=>{
    const { meta } = useRoute();
    return (
        <>
            {meta?.name}
        </>
    )
}

export default Potato