import React from 'react'

function SortBtn (props) {
    return (
    <button id="sort-btn" onClick={props.changeSort}><i className=" material-icons">{(props.sort > 0)? `Alphabetical` : `Reverse Alphabetical`}</i></button>
    )
}

export default SortBtn;