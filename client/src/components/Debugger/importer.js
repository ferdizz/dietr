import React, { Component } from 'react';
import data from './data.json'
import axios from 'axios'

class Importer extends Component {

    importFoods = () => {
        let promises = []
        let counter = 0

        data.forEach(function (food) {
            promises.push(axios.post('http://localhost:3001/foods', food)
                .catch(function (err) {
                    return err.response;
                }))
        })

        axios.all(promises).then(function (results) {
            results.forEach(function (res) {
                if (res.status === 201) {
                    counter++;
                } else {
                    console.log(res.data.message)
                }
            })
            console.log(counter + ' of ' + data.length + ' food items imported')
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Importer</h5>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.importFoods} >Import foods</button>
                    <button className="btn btn-primary" >Import ...?</button>
                </div>
            </div>
        );
    }
}

export default Importer;
