import React, { Component } from 'react'
import Card from "./Card";
import API from "../utils/API";
import Navbar from "./Navbar";
import SearchEmployee from "./Searchemployee"

export default class EmployeePopulate extends Component {
    state = {
        result: [],
        search: '',
        sort: 1,
        filterList: []
    }

    componentDidMount() {
        this.loadEmployees()
    }

    sortEmployees = (emp1, emp2) => {
        let last1 = emp1.name.last
        let last2 = emp2.name.last
        let answ = 0
        if (last1 > last2) {
            answ = this.state.sort
        } else if (last1 < last2) {
            answ = this.state.sort * -1
        }
        return answ
    }

    changeSort = () => {
        if (this.state.sort === 1) {

            this.setState({ sort: -1 })
        } else {
            this.setState({ sort: 1 })
        }
        this.setState({ result: this.state.result.sort(this.sortEmployees) })
    }

    loadEmployees = async () => {
        const empList = await API.search()
        let list = empList.data.results.sort(this.sortEmployees)
        this.setState({ result: list, filterList: list })
    }

    handleInputChange = (e) => {
        e.preventDefault();
        let newArr = [...this.state.result]
        this.setState({
            search: e.target.value,
            filterList: newArr.filter(empl => (empl.name.first.includes(e.target.value) || empl.name.last.includes(e.target.value)))
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container p-2" id='tableContainer'>
                    <SearchEmployee value={this.state.search} handleInputChange={this.handleInputChange} employees={this.state.result} />
                    <Card employees={this.state.filterList} changeSort={this.changeSort} sortEmployees={this.sortEmployees} sort={this.state.sort} />
                </div>
            </>
        )
    }
}
