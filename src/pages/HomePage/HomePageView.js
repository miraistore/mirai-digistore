import React, { Component } from 'react'
import {String} from '../../system/Collection'
import {Container,Row,Col} from 'react-bootstrap'
import BasicCarousel from '../../component/BasicCarousel'
import BasicCard from '../../component/BasicCard'

export default class HomePageView extends Component {
    render() {
        return (    
            <div >  
                <Container className="mt-4">
                    <BasicCarousel/>
                    
                    <Row>
                        {/* BAGIAN PRODUK */}
                        <Col lg={12}>
                            <Row>
                                <Col xs={10} lg={10}>
                                    <Row>
                                        <h3 className="mt-4 fontBold">Produk Kami</h3>
                                        <Col xs={2} lg={1}>
                                            <hr className="brStyle"></hr>
                                        </Col>
                                    </Row>
                                </Col>
                                {/* <Col className="mt-4" xs={2} lg={2}>
                                    <a className="d-flex justify-content-end align-items-center" style={{textDecoration : "none"}} href="#"><p  style={{color : String.PRIMARY_COLOR}}>Lihat&nbsp;Semua&nbsp;{'>'} </p></a>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col>
                            <Row className="p-0">
                                {Object.keys(this.props.state.data).map((item,key)=>{
                                    var data = this.props.state.data;
                                    return <Col className="my-3" md={3} xs={6}>
                                                <BasicCard tittle={data[item].nama} onClick={() => this.props.method.handleBuy(data[item],item)} img={data[item].foto} text={data[item].deskripsi}/>
                                           </Col>
                                })}
                                
                            </Row>
                        </Col>
                        {/* BATAS PRODUK */}

                        {/* BAGIAN JASA */}
                        <Col lg={12}>
                            <Row>
                                <Col xs={10} lg={10}>
                                    <Row>
                                        <h3 className="mt-4 fontBold">Jasa Yang Kami Tawarkan</h3>
                                        <Col xs={2} lg={1}>
                                            <hr className="brStyle"></hr>
                                        </Col>
                                    </Row>
                                </Col>
                                {/* <Col className="mt-4" xs={2} lg={2}>
                                    <a className="d-flex justify-content-end align-items-center" style={{textDecoration : "none"}} href="#"><p  style={{color : String.PRIMARY_COLOR}}>Lihat&nbsp;Semua&nbsp;{'>'} </p></a>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col>
                            <Row className="p-0">
                                {/* <Col className="my-3" md={3} xs={6}>
                                    <BasicCard tittle="Joki ML" text="testseetes"/>
                                </Col>
                              */}
                            </Row>
                        </Col>
                        {/* BATAS JASA */}
                    </Row>
                </Container>
            </div>
        )
    }
}
