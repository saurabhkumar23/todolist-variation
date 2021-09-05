import React,{useReducer} from 'react'

const ACTIONS = {
    SET_TEXT: 'set_text'
}

function reducer(todoItem,action){
    switch(action.type){
        case ACTIONS.SET_TEXT : 
            return action.payload
        default :
            return todoItem
    }
}

const Main = () => {

    const [todoItem,dispatch] = useReducer(reducer,'')

    const inputHandler = (e) => {
        if(e.keyCode == 13){
            dispatch({type:ACTIONS.SET_TEXT,payload:e.target.value})
        }
    }

    return (
        <div>
            <input onKeyDown={(e) => inputHandler(e)}/>
        </div>
    )
}

export default Main