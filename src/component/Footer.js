import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {String} from '../system/Collection'
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
           <div>
                {/* Footer */}
                <div className="mt-5" style={{backgroundColor : String.PRIMARY_COLOR}}>
                    <Container>
                        <Row>
                            <Col md={6} className="py-4">
                                <h4 style={{color: "white", fontWeight : "bold"}}>
                                    Mirai Digital Store
                                </h4>
                                <p className="mb-0" style={{color: "white"}}>
                                    Mirai Digital Store adalah tempat yang menyediakan segala macam kebutuhan digital seperti TopUp game, joki game, pembuatan web dan desain grafis dll. Kami memberikan pelayanan yang terpercaya, cepat dan harga yang terbaik. Kami juga menerima beberapa metode pembayaran seperti Gopay, OVO, Dana, BCA, BRI.
                                </p>
                            </Col>
                            <Col md={3} className="py-4">
                                <h4 style={{color: "white", fontWeight : "bold"}}>
                                    Mitra
                                </h4>
                                <a href="#" className="mb-2" style={{color: "white", textDecoration : "none"}}>
                                 Daftar Reseller<br/>
                                </a>
                                <a href="#" className="mb-2" style={{color: "white", textDecoration : "none"}}>
                                 Daftar Member<br/>
                                </a>
                                <a href="#" className="mb-2" style={{color: "white", textDecoration : "none"}}>
                                 Titip Jasa<br/>
                                </a>
                            </Col>
                            <Col md={3} className="py-4">
                                <h4 style={{color: "white", fontWeight : "bold"}}>
                                    Kontak
                                </h4>
                                <a href="#" className="mb-2" style={{color: "white", textDecoration : "none"}}>
                                    <FaWhatsapp/> WA : +6289530437876<br/>
                                </a>
                                <a href="https://www.instagram.com/mirai_gamestore/" className="mb-2" style={{color: "white", textDecoration : "none"}}>
                                    <FaInstagram/> mirai_gamestore<br/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{backgroundColor : "white"}}>
                    <Container className="py-3">
                        <Row>
                            <Col className="d-flex align-items-center" xs={8} md={11}>
                                <p className="mb-0">&copy;2021 Built with React JS, Mirai Digital Store</p>
                            </Col>
                            <Col md={1} xs={4} className="d-flex justify-content-end">
                                <img src={String.LOGO_DARK} className="img-fluid"  alt="Logo Footer"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* Batas Footer */}
           </div>
        )
    }
}
