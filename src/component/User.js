import React, { Component } from 'react';

class User extends Component {
    constructor() {
        super()
        this.state ={
            toggle:true
        }
    }
    componentWillUnmount() {
        alert("component unmount")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name :mahesh</li>
                </ul>
            </div>
        );
    }
}

export default User;