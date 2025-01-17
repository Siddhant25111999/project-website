import React, { useEffect, useState } from 'react'
import { baseurl, endurl } from '../api/api_url'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';

const Category = () => {

  let api = baseurl + endurl;
  let { cat } = useParams()
  console.log("category is",cat);
  let [state, setstate] = useState()
  let fetchdata = () => {
    axios.get(`${api}/category/${cat}`)
      .then((res) => {
        console.log("result is", res);
        setstate(res.data.products)
      })
      .catch((err) => {
        console.log("error is", err);

      })
  }
  useEffect(() => {
    fetchdata()
  }, [cat])



  return (
    <div>
      {/* <h1>Category</h1> */}
      <Container>
        <Row>
          {state?.map((value) => (
            <Col key={value.id} md={3}>
                
                <Card>
                <Card.Img src={value.thumbnail}/>
                 <Card.Body>
                  <Card.Title>
                    {value.title}
                  </Card.Title>
                  <Card.Text>
                   Brand: {value.brand}
                  </Card.Text>
                  <Card.Text>
                  Category: {value.category}
                  </Card.Text>
                  <Link to={`/products/${value.category}/details/${value.id}`}><Button>View Details</Button></Link>  
                  </Card.Body> 
               
                </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Category