import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">{props.gender}</h5>
                </div>
            </div>
        </div>
    )
}
