import React,{useState} from 'react'

const Main = () => {

    const [todoItem, setTodoItem] = useState('')

    const inputHandler = (e) => {
        if(e.keyCode == 13){
            setTodoItem(e.target.value)
        }
    }

    return (
        <div>
            <input onKeyDown={(e) => inputHandler(e)}/>
        </div>
    )
}

export default Main
