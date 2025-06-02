import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product_card = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () =>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <img src={item?.img} className='img_size'/>
      <div>{item?.choice == true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price} 원</div>
      <div>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default Product_card

