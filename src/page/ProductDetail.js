import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";

const ProductDetail = () => {
  console.log("why");
  let { id } = useParams();
  console.log("id", id);
  const [product, setProduct] = useState(null);
  console.log(product);
  const getProductDetail = useCallback(async () => {
    let url = `https://my-json-server.typicode.com/jeww1234/shopping/products/${id}`;
    console.log(url);
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  }, [id]);
  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <Container>
      <Row className="detail-box">
        <Col className="img-box">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="product-box">
          <div>{product?.title}</div>
          <div>\ {product?.price}</div>
          <div className="choice">
            {product?.choice === true ? "Conscious choice" : ""}
          </div>
          <div className="new">{product?.new === true ? "신제품" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>            
          </DropdownButton>
          <div className="size-button"><button>추가</button></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
