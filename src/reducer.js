import { LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./action"


const reducer = (state, action) => {
    if (action.type === LOADING) {
        return ({...state, loading: true })
    }
    if (action.type === SET_STORIES) {
        return ({...state,
            loading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages
        })
    }
    if (action.type === REMOVE_STORY) {
        return ({...state,
            hits: state.hits.filter((item) => {
                return (
                    item.objectID !== action.payload
                )
            })
        })
    }
    if (action.type === HANDLE_SEARCH) {
        return ({...state, query: action.payload, page: 0 })
    }
    if (action.type === HANDLE_PAGE) {
        if (action.payload === 'inc') {
            let nextPage = state.page + 1
            if (state.page > state.nbPages - 1) {
                nextPage = 0
            }
            return {...state, page: nextPage }
        }
        if (action.payload === 'dec') {
            let prevPage = state.page - 1
            if (prevPage < 0) {
                prevPage = state.nbPages - 1
            }
            return {...state, page: prevPage }
        }
    }

    return state
}
export default reducer