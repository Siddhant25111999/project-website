import React, { useEffect, useState } from 'react'
import { baseurl, catagoryurl, endurl } from '../api/api_url'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SideBar = () => {
    let api = baseurl + endurl + catagoryurl;
    // console.log(api);
    let [state, setstate] = useState()
    let fetchdata = () => {
        axios.get(api)
            .then((res) => {
                console.log("result:", res);
                setstate(res.data)
            })
            .catch((err) => {
                console.log("error:", err);

            })
    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (

        <div>
            <div style={{ "float": "left" }}>
                <Container>

                    <ul>

                        {state?.map((value) => (
                            <Link to={`/products/category/${value}`}> <li>{value}</li></Link>
                        ))}
                    </ul>
                </Container>
            </div>


        </div>
    )
}

export default SideBar