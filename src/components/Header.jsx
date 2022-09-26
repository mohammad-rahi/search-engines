import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IoApps } from 'react-icons/io5'
import { MdMoreHoriz } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const engine = useSelector(state => state.engine.engineName);

    return (
        <header>
            {
                engine === "bing" ? <Navbar expand="lg" className='p-0'>
                    <Container>
                        <Navbar.Brand href="#" className='me-5'>
                            <Image src="/assets/images/MicrosoftBingLogo.png" className='microsoft_logo' />
                        </Navbar.Brand>
                        <Nav className="ms-4 d-flex flex-row align-items-center">
                            <Nav.Link href="#" className='text-light'>Images</Nav.Link>
                            <Nav.Link href="#" className='ms-3 text-light'>Videos</Nav.Link>
                            <Nav.Link href="#" className='ms-3 text-light'>Maps</Nav.Link>
                            <Nav.Link href="#" className='ms-3 text-light'>
                                <MdMoreHoriz className='fs-5' />
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto d-flex flex-row align-items-center">
                            <Nav.Link href="#" className='text-light'>বাংলা</Nav.Link>
                            <Nav.Link href="#" className='ms-3 text-light'>
                                Mohammad
                                <Image roundedCircle className='avatar user-select-none ms-1' src='/assets/images/img_avatar.png' />
                            </Nav.Link>
                            <Nav.Link href="#" className='text-light apps rounded-circle d-flex justify-content-center align-items-center ms-3'>
                                <FaBars />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> : <Navbar bg="white" expand="lg">
                    <Container fluid>
                        <Nav className="ms-auto d-flex flex-row align-items-center">
                            <Nav.Link href="#">Gmail</Nav.Link>
                            <Nav.Link href="#" className='ms-2 m-md-0'>Images</Nav.Link>
                            <Nav.Link className='apps rounded-circle d-flex justify-content-center align-items-center ms-3' href="#">
                                <IoApps />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <Image roundedCircle className='avatar user-select-none' src='/assets/images/img_avatar.png' />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            }
        </header>
    )
}

export default Header