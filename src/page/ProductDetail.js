import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {Row, Col} from "react-bootstrap";

const ProductDetail = () => {
  console.log("why")
  let {id} = useParams()
  console.log("id",id)
  const [product, setProduct] = useState(null);
  console.log(product)
  const getProductDetail = useCallback(async() => {
    let url = `http://localhost:5000/products/${id}`
    console.log(url)
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  },[id]);
  useEffect(() => {
    getProductDetail();
  },[getProductDetail]);

  return <Container>
    <Row>
      <Col>
        <img src={product?.img} alt=""/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
      </Col>
    </Row>

  </Container>;
};

export default ProductDetail;
