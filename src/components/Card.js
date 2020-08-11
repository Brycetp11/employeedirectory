import React from 'react'
import SortBtn from "./SortBtn"

export default function Card(props) {
    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2"><h4>Name <SortBtn sort={props.sort}  changeSort={props.changeSort}/></h4></div>
                <div className="col-3"><h4>Email</h4></div>
                <div className="col-2"><h4>Phone</h4></div>
                <div className="col-3"><h4>Address</h4></div>
            </div>
            {props.employees.sort(props.sortEmployees).map(empl => (
            <div className="row p-2 m-2"  key={empl.id.value}>
                <div key={empl.id.value} className="col-1">
                <img src={empl.picture.thumbnail} className="align-self-center mr-3" alt={`${empl.name.first} ${empl.name.last}`}/>
                </div>
            <div  key={empl.id.value} className="col-2">{`${empl.name.first} ${empl.name.last}`}</div>
            <div key={empl.id.value} className="col-3">{empl.email}</div>
            <div key={empl.id.value} className="col-2">{empl.phone}</div>
            <div key={empl.id.value} className="col-3">{`${empl.location.city}, ${empl.location.state}, ${empl.location.country}`}</div>
            </div>
            ))}
        </>
    )
}
