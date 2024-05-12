import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/main/' + id )
            .then( res => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);
    return (
        <div>
            <p>Item Name: {item.name}</p>
            <p>Aggregate Size: {item.details.size}</p>
            <p>Concrete Mix: {item.details.mix}</p>
            <p>Item Cost: {item.details.cost}</p>
            {/* <Link to={"/main/update/" + item._id}>Edit</Link> */}
            <Link to={"/main/" }>Back to Main List</Link>
        </div>
    );
}
export default Detail;