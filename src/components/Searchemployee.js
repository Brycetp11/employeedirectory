import React from 'react'

function SearchEmployee(props) {
    return (
        <div className="row d-flex flex-row justify-content-center">

        <form className="search">
            <div className="form-group">

                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    type="text"
                    className="form-control"
                    placeholder="Who are you looking for?"
                    id="employee"
                />
            </div>
        </form>
        </div>
    )
}

export default SearchEmployee