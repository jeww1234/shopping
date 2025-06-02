import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Product_detail = () => {
  let{id} = useParams()
  const[product, setProduct] = useState(null)
  const[selectsize, setSelectsize] = useState('')
  const getProductDetail = async () =>{
    let url = `https://my-json-server.typicode.com/jeww1234/shopping/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])

  return <Container>
    <Row className='product-box'>
      <Col className='product-img'>
        <img src={product?.img}/>        
      </Col>
      <Col className='product-info'>
      <div><h3>{product?.title}</h3></div>
      <div><h3>${product?.price}</h3></div>
      <div>{product?.choice}</div>
      <div>
      <Dropdown onSelect={(eventKey)=>{setSelectsize(eventKey)}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectsize ? `사이즈: ${selectsize}` : '사이즈 선택'}
      </Dropdown.Toggle>

      <Dropdown.Menu>        
        <Dropdown.Item eventKey={"S"}>S</Dropdown.Item>
        <Dropdown.Item eventKey={"M"}>M</Dropdown.Item>
        <Dropdown.Item eventKey={"L"}>L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div className="d-grid">
      <Button variant="primary" size="lg">
        추가
      </Button>
    </div>
      </Col>
    </Row>
  </Container>
}

export default Product_detail
