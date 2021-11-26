import React from 'react'
import { useGlobalContext } from './context'

const  SearchForm=()=> {
    const { query, handleSearch}=useGlobalContext()
    return (
        <section className='section search'>
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
       <div className='form-control'>
         <label htmlFor='name'>search news here</label>
         <input
           type='text'
           name='name'
           id='name'
           value={ query }
           onChange={(e) => handleSearch(e.target.value)}
          
         />
       </div>
     </form>
       </section>
    )
}

export default SearchForm
