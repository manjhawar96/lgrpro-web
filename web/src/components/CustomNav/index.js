import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 

function CustomNav() {
    return (
        <Navbar fixed="top">
        <Navbar.Brand href="#home"><b>LGR</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
  }
  
  export default CustomNav;