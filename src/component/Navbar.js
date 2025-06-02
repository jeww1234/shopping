import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  const menulist = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

const navigate = useNavigate()

const goTohome = () =>{
  navigate("")
}

const goToLogin = () =>{
  if(authenticate == true){
    setAuthenticate(false)
  }
  navigate("/login")
  
}

const search = (event) =>{
  if(event.key == "Enter"){
    let keyword = event.target.value
    navigate(`/?q=${keyword}`)
  }
}
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-session">
        <img onClick={goTohome}
          width={150}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="icon-area">
          <FontAwesomeIcon icon={faSearch} className="icon"  tabIndex="-1"/>
          <input type="text" onKeyPress={(event)=>search(event)} className="input_text"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
