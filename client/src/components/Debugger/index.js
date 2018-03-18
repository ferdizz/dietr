import React, { Component } from 'react'
import Card from './card'

class Debugger extends Component {
    render() {
        return (
            <div>
                <Card type={'user'} />
                <Card type={'foods'} />
                <Card type={'nutrients'} />
                <Card type={'meals'} />
                <Card type={'recipes'} />
            </div>
        );
    }
}

export default Debugger;