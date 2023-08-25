import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav } from 'react-bootstrap';
import PlacesToVisit from '../pages/PlacesToVisit';

const Header = () => {
  return (
    <>
    <Navbar  expand="lg">
      <Navbar.Brand href="#">tamilnadu tourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link  > <Link to={'/'} className='text-white text-decoration-none fw-bold'>Home</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/Places'} className='text-white text-decoration-none fw-bold'>Places To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Best Time To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Packages</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Destination</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Food</Link> </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Places' element={<PlacesToVisit />}/>
    </Routes>
    
    </>
  );

};

export default Header;