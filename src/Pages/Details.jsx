import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurl, endurl } from '../api/api_url'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Details = () => {
    let api = baseurl + endurl;
    let { id } = useParams()
    // console.log(id);
    let [state, setstate] = useState({})

    let fetchData = () => {
        axios.get(`${api}/${id}`)
            .then((res) => {
                // console.log("result is", res);
                setstate(res.data)
            })
            .catch((err) => {
                // console.log("error is", err);

            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    // console.log("state is", state);


    return (

        <div>
            <h1>Single Products</h1>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href={`/products/category/${state.category}`}>
                 {state.category}   
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{state.title}</Breadcrumb.Item>
            </Breadcrumb>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-3'>
                        <div className='card p-3'>
                            <div className='row g-0 align-items-center'>
                                <div className='col-md-4'>
                                    <img className='img-fluid rounded-start' src={state.thumbnail} alt="productsImage" />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>
                                            {state.title}
                                        </h4>
                                        <p className='card-text'>
                                            {state.stock} items available
                                        </p>
                                        <p>
                                            {state.description}
                                        </p>
                                        <p>
                                            Price:${state.price}
                                        </p>
                                        {state.tags?.map((value) => (
                                            <span className='badge bg-secondary me-2'>
                                                #{value}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p>Other Details</p>
                <p>Availability: {state.availabilityStatus} </p>
                <p>Minimum Order Quality: {state.minimumOrderQuantity}</p>
                <p>Return Policy: {state.returnPolicy}</p>
                <p>Shipping Information:{state.shippingInformation}</p>
                <p>Customer Reviews: </p>
            </div>






        </div>
    )
}

export default Details