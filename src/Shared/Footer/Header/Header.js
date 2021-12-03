import { signOut } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/home#home">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/skill">Skills</Nav.Link>
                        <Nav.Link href="/expert">Expert</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>




    );
};

export default Header;