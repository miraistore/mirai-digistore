import React from 'react'
import Logo from './Logo'
import {Navbar, Container,Nav} from 'react-bootstrap';
import {FaSearch,FaPencilRuler,FaGem} from 'react-icons/fa'


export default function PrimaryNavbar() {
    return (
            <Navbar bg="primary" sticky="top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Logo
                            width="70"
                            height="70"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fontMedium" href="#">
                                <FaGem className='mb-1'/>{' '}Produk
                            </Nav.Link>
                            <Nav.Link className="fontMedium" href="#"><FaPencilRuler className='mb-1'/>{' '}Jasa</Nav.Link>
                            <Nav.Link className="fontMedium" href="#"><FaSearch className='mb-1'/>{' '}Cek Pesanan</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-end">
                            <Nav.Link className="fontMedium" href="#/Register">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
