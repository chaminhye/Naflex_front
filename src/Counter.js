import React, { Component } from 'react';

class Counter extends Component{
    state = {
        counter :0,
        fixed : 1

    };

    handleIncreae = () =>{
        this.setState(state => ({
            counter : this.state.counter +1
        }));
    }
    handleDecreae= () =>{
        this.setState(state => ({
            counter : this.state.counter -1
        }));
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncreae}>+1</button>
                <button onClick={this.handleDecreae}>-1</button>
                <p>고정값 : {this.state.fixed}</p>
            </div>
        );
    }
}


export default Counter;