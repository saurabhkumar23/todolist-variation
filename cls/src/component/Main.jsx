import React, { Component } from 'react'

export class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            todoItem : '',
        }
    }

    inputHandler = (e) => {
        if(e.keyCode == 13){
            this.setState({
                todoItem : e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <input onKeyDown={(e) => this.inputHandler(e)}/>
            </div>
        )
    }
}

export default Main
