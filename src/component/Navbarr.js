import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHamburger, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbarr = ({ authenticate, setAuthenticate }) => {
  console.log("au", authenticate)
  console.log("sau", setAuthenticate)
  const menulist = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  let [display, setDisplay] = useState()
  const navigate = useNavigate();
  const goTologin = () => {
    navigate("/login");
  };
  const goTologHome = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      console.log("keypree");
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ display: display }}>
        <button className="closebtn" onClick={() => setDisplay("none")}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list" onClick={() => setDisplay("none")}>
          {menulist.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="hamham">
        <FontAwesomeIcon className="ham-button" icon={faHamburger} onClick={() => setDisplay("block")}/>
        <div className="login-button" onClick={goTologin}>
          {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
        </div>
      </div>
      <div className="nav-section" onClick={goTologHome}>
        <img
          width={150}
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
          <input
            className="search-input"
            type="text"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbarr;
