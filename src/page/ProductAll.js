import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams()
  const getProducts = useCallback( async () => {
    let searchQuery=query.get("q")||""
    console.log(query)
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    console.log("url", url)
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  },[query]);
  setQuery = ()=>{
    console.log("what")
  }
  useEffect(() => {
    getProducts();
  },[query, getProducts]);

  return (
    <div>
      <Container>
        <Row>
          {productList &&
            productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
