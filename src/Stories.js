import React from 'react'
import { useGlobalContext } from './context'

const Stories=() =>{
    const {loading, hits , handelRemove} =useGlobalContext()
   if(loading){
       return(
           <div className='loading'></div>
       )
   }
    return (
        <section className='stories'>
        {hits.map((story)=>{
            const {title, author,num_comments,objectID,points,url} =story
            ///console.log(story)
            return(
                <article key={objectID} className='story'> 

<h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button  className='remove-btn'  onClick={()=>handelRemove(objectID)} >     remove    </button>
            </div>
                </article>
            )
        })}
        </section>
    )
}

export default Stories
