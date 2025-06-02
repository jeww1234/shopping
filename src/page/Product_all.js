import React, { useEffect, useState } from "react";
import Product_card from "../component/Product_card";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Product_all = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get(`q`)
    let url = `https://my-json-server.typicode.com/jeww1234/shopping_react/products`;  
    let response = await fetch(url);
    let data = await response.json();    
    
    let filteredData = searchQuery
    ? data.filter((item)=>item.title.includes(searchQuery)) : data
    setProductList(filteredData)
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <Product_card item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product_all;
