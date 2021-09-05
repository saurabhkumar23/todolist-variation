import React, { Component } from 'react'

export class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : 'saurabh',
            age : 21
        }
    }

    inputHandler = (e) => {
        if(e.keyCode == 13){
            console.log(e.target.value)
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
