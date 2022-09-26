import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer w-100 fixed-bottom text-muted">
            <Container fluid>
                <Row>
                    <Col className='py-2 my-2 px-4 mx-2'>
                        <p className='my-auto'>Bangladesh</p>
                    </Col>
                    <hr />
                </Row>
                <Row className='px-4 footer_links flex-column flex-lg-row'>
                    <Col className="d-flex gap-4 justify-content-lg-start justify-content-center">
                      <p>About</p>
                      <p>Advertising</p>
                      <p>Business</p>
                      <p>How Search Works</p>
                    </Col>
                    <Col className="d-flex gap-4 justify-content-lg-end justify-content-center">
                      <p>Privacy</p>
                      <p>Terms</p>
                      <p>Settings</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer