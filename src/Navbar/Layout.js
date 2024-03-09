import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
         <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark" className="navbarstyle">
            <Container>
                <Navbar.Brand href="#home"><h4 className="">ZeroBug</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/" className="fw-bold">Home</Nav.Link>
                    <Nav.Link href="/blogs" className="fw-bold">Blogs</Nav.Link>
                    <Nav.Link href="/contact" className="fw-bold">Contact</Nav.Link>
                    <Nav.Link href="/register" className="fw-bold">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
         {/* An <Outlet> should be used in parent route elements to render their child route elements     */}
        <Outlet/>
        </>
        );
    }
    export default Layout;