import React, {useState ,useEffect, useContext, useReducer} from "react";
import reducer from './reducer'
import { LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./action"

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext= React.createContext();

const initailState={
    loading:true,
    hits:[],
    page:0,
    query:'react',
    nbPages: 0
   }


const AppProvider=({children})=>{
    const [state, dispatch] =useReducer(reducer, initailState)

  
    const fetchNews = async (url)=>{
        dispatch ({type: LOADING})
        const response = await fetch(url)
        const data = await response.json()
        dispatch ({type: SET_STORIES, payload:{hits:data.hits, nbPages:data.nbPages }})

    }

    const handelRemove=(id)=>{
        //console.log(id)
        dispatch ({type: REMOVE_STORY, payload:id})
    }
    const  handleSearch=(query)=>{
        dispatch ({type: HANDLE_SEARCH, payload:query})
    }
    const handelPage=(type)=>{
        console.log(type)
        dispatch ({type:  HANDLE_PAGE, payload:type})

    }


    useEffect(()=>{
        fetchNews(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])




    return(
        <AppContext.Provider value={{...state, handelRemove, handleSearch, handelPage}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext , AppProvider}