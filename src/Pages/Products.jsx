import React, { useEffect, useState } from 'react'
import { baseurl, endurl } from '../api/api_url'
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {

    let api = baseurl + endurl;
    let [state, setstate] = useState([]);
    let fetchData = () => {
        axios.get(api)
            .then((res) => {
                // console.log("results are", res);
                setstate(res.data.products)
            })
            .catch((err) => {
                // console.log("errors are", err);

            })
    }
    useEffect(() => {
        fetchData()
    }, [api])
    // console.log(state);
    


    return (


        <div>
            {/* <p>Products</p> */}
            <Container style={{"float":"right"}}>
            <Row>
                {state?.map((value) => (
                    <Col md={3}>
                <Card className='img-fluid'>
                    <Card.Img variant='top' src={value.thumbnail}/>
                  <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.category}</Card.Text>
                  <Card.Text>{value.brand}</Card.Text>
                  </Card.Body>
                  <Link to={`products/${value.category}/details/${value.id}`}><button className='btn btn-primary'>Details</button></Link>
                  
                </Card>
                
                    
                    </Col>
                ))}
            </Row>
            </Container>
            

        </div>

    )
}

export default Products