import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbarr = () => {
  const menulist = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate()
  const goTologin = ()=>{
    navigate('/login')
  }
  const goTologHome = () =>{
    navigate('/')
  }
  const search =(event)=>{
    
    if(event.key === "Enter"){
      console.log("keypree")
      let keyword =event.target.value
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
      <div>
        <div className="login-button" onClick={goTologin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section" onClick={goTologHome}>
        <img
          width={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
          alt=""
        />
      </div>
      <Container className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input className="search-input" type="text" onKeyPress={(event)=>search(event)} />
        </div>
      </Container>
    </div>
  );
};

export default Navbarr;
