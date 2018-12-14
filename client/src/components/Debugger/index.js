import React, { Component } from 'react';
import Card from './card';
import Importer from './importer';

class Debugger extends Component {
    render() {
        return (
            <div>
                <Importer />
                <Card type={'user'} />
                <Card type={'meals'} />
                <Card type={'foods'} />
                <Card type={'nutrients'} />
                <Card type={'recipes'} />
            </div>
        );
    }
}

export default Debugger;
