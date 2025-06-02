
import './App.css';
// 전체 상품페이지, 로그인, 상품상세페이지
// 네비에기션바 만들기
// 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 로그아웃이되면 상품 디테일페이지를 볼 수 없다, 로그인 페이지로 이동
// 로그인-> 로그아웃, 로그아웃-> 로그인
// 상품을 검색할 수 있다.
import { Route, Routes } from 'react-router-dom';
import Product_all from './page/Product_all';
import Login from './page/Login';
import Product_detail from './page/Product_detail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const[authenticate, setAuthenticate]  = useState(false) // true = login
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar setAuthenticate = {setAuthenticate} authenticate = {authenticate}/>
      <Routes>
        <Route path="/" element={<Product_all/>}></Route>
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
