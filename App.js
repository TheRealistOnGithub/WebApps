import React from 'react';
import './App.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">

            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square/>;
    }

    render() {


        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

constructor();
{
    super();
    this.state = {
        black: true
    }
}


changeColor()
{
    this.setState({black: !this.state.black})
}
toggle = function (position) {
    if (this.state.active === position) {
        this.setState({active: null})
    } else {
        this.setState({active: position})
    }
};

myColor = function (position) {
    let colors = ['red', 'blue', 'green', 'orange', 'purple', 'white'];
    if (this.state.active === position) {
        console.log(colors[2]);

        return colors[position];
    }
    return "";
};

render()
{

    let test = this.state.black ? "blackButton" : "whiteButton";

    let testss = Math.floor(Math.random() * 3);
    return (
        <div className={'divtest'} style={{backgroundColor: this.myColor(testss)}} onLoad={() => {
            this.toggle(testss)
        }}>
            <button className={test} style={{backgroundColor: this.myColor(testss)}} onClick={() => {
                this.toggle(testss)
            }}>
                chair
            </button>
        </div>
    );
}

export default Square;
