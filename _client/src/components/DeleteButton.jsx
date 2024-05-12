import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { itemId, successCallback } = props;
    const deleteItem = e => {
        axios.delete('http://localhost:8000/api/main/' + itemId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteItem}>
            Delete
        </button>
    )
}
export default DeleteButton;