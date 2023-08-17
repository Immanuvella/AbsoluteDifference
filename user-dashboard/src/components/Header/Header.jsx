import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { FaSearch } from 'react-icons/fa';
import {  Navbar, Nav, Form, FormControl,Dropdown } from 'react-bootstrap'; // import logo from './logo.png';
import image1 from '../images/profile.jpg'
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "My Courses",
    url: "#",
  },

  {
    display: "Dashboard",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Brain Box
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>
          
          <Navbar bg="light" expand="lg">
       
        <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto" />
            <Form inline> 
              <FormControl type="text" placeholder="Search" className="mr-sm-1 " />
              
            </Form>
            <div className="profile-dropdown">
              
                <Dropdown show={showDropdown} onClick={toggleDropdown}> &nbsp;&nbsp;&nbsp;&nbsp;
                <span> <img class="img1" src={image1} alt="First slide" ></img></span>
                  <Dropdown.Toggle variant="light" id="profile-dropdown-toggle">
                    <i className="ri-user-line"></i>
                  </Dropdown.Toggle>
                 
                  <Dropdown.Menu>
                    
                    <Dropdown.Item href="#">Sign In</Dropdown.Item>
                    <Dropdown.Item href="#">Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>          
          </Navbar.Collapse>
    
      </Navbar>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
    
  );
};

export default Header;
