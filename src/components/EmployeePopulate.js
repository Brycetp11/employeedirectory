import React, { Component } from 'react'
import Card from "./Card";
import API from "../utils/API";

export default class EmployeePopulate extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchUsers();
    }

    searchUsers = () => {
        API.search()
            .then(res => this.setState({ results: res.data.results}))
            .catch(err => console.log(err));
    };

    employeeRender = () => {
        for (let i = 0; i < 100; i++) {
            return <Card key={this.state.results} 
            results= {this.state.results}
            />
        }
    }

    render() {
        return (
            <div>
                {this.employeeRender()}
            </div>
        )
    }
}
