import React from 'react'
import { useGlobalContext } from './context'

const Buttons=()=> {
    const {loading, page, nbPages, handelPage} =useGlobalContext()
    return (
        <div className='btn-container'>
            <button disabled={loading} onClick={()=>handelPage('dec')}>prev</button>
                 <p>{page + 1} of {nbPages}</p>
            <button disabled={loading} onClick={()=>handelPage('inc')}>next</button>
        </div>
    )
}

export default Buttons
