import React, { Component } from 'react'
import {Container,Row,Col,Form,Image,Badge,Alert} from 'react-bootstrap'
import FormInput from '../../component/FormInput'
import BasicToggleButton from '../../component/BasicToggleButton'
import BasicButton from '../../component/BasicButton'
import BasicModal from '../../component/BasicModal'
import LoadingOverlay from 'react-loading-overlay'
import { CircleLoader } from 'react-spinners'
import { String } from '../../system/Collection'
import Loading from '../../component/Loading'


export default class OrderPageView extends Component { 
    render() {
        return (
            <div>
                <Container className="mt-4">
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={12} xs={12}>
                                    <img src={this.props.state.foto} className="img-fluid borderRounded"  alt="Foto Produk"/>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Row>
                                        <h4 className="mt-4 fontBold fontDark">{this.props.state.namaProduk}</h4>
                                        <Col xs={2} md={3}>
                                            <hr className="brStyle"></hr>
                                        </Col>
                                    </Row>
                                    <p style={{color: '#444444'}} className="mt-2 fontMedium">{this.props.state.deskripsi}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Loading
                                active={this.props.state.showLoading}
                            >
                                <div style={{backgroundColor:"white"}} className="borderRounded p-3 ">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <Row>
                                                <h5 className="fontBold fontDark">Masukkan Data</h5>
                                                <Col xs={2} md={1}>
                                                    <hr className="brStyle"></hr>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className="py-2" md={12}>
                                            <Form>
                                                {/* <FormInput
                                                    classNameGroup= "mb-3"
                                                    controlId="formNick"
                                                    label="Nick Name"
                                                    type="text"
                                                    name="nickName"
                                                    placeholder="Masukkan Nick Name"
                                                    onChange={(e) => this.props.method.handleInputChange(e)}
                                                /> */}
                                                <Row>
                                                    <Col>
                                                        <FormInput
                                                            classNameGroup= "mb-3"
                                                            controlId="formIdGame"
                                                            label="Id Game"
                                                            type="number"
                                                            classNameControl= "without_number"
                                                            name="idUserGame"
                                                            placeholder="contoh : 123456"
                                                            onChange={(e) => this.props.method.handleInputChange(e)}
                                                            onBlur={() => this.props.method.getNickGame()}
                                                            disabled={this.props.state.showLoading}
                                                        />
                                                    </Col>
                                                    <Col xs={5} md={3}>
                                                        <FormInput
                                                            classNameGroup= "mb-3"
                                                            controlId="formServerGame"
                                                            label="Server"
                                                            type="number"
                                                            classNameControl= "without_number"
                                                            name="idZoneGame"
                                                            placeholder="1234"
                                                            onChange={(e) => this.props.method.handleInputChange(e)}
                                                            onBlur={() => this.props.method.getNickGame()}
                                                            disabled={this.props.state.showLoading}
                                                        />
                                                    </Col>
                                                </Row>
                                                {(this.props.state.code === 201) ? 
                                                    <Alert variant='danger' style={{borderRadius : String.BORDER_RADIUS}}>
                                                        {this.props.state.warning}
                                                    </Alert> : <div>{this.props.state.nickGame}</div>
                                                    
                                                }
                                                {/* <Button variant="primary" type="submit">
                                                    Submit
                                                </Button> */}
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </Loading>
                            
                            <div style={{backgroundColor:"white"}} className="borderRounded mt-4 p-3 " >
                                <Row>
                                    <Col md={12} xs={12}>
                                        <Row>
                                            <h5 className="fontBold fontDark">Pilih Nominal</h5>
                                            <Col xs={2} md={1}>
                                                <hr className="brStyle"></hr>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="py-2" md={12}>
                                            <Row>
                                                {this.props.state.harga.map((harga, idx) => (
                                                    <Col className="mt-2" xs={6} md={4}>
                                                        <BasicToggleButton
                                                             key={idx}
                                                             id={`radioNominal-${idx}`}
                                                             type="radio"
                                                             variant="outline-primary"
                                                             name="radioNominal"
                                                             className="d-flex"
                                                             value={harga.jumlah}
                                                             checked={this.props.state.selectedNominal === harga.jumlah}
                                                             onChange={(e) => this.props.method.onNominalChange(harga.jumlah,harga.harga)}
                                                        >
                                                            {harga.jumlah+' dm'}
                                                        </BasicToggleButton>
                                                    </Col>
                                                ))}
                                            </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{backgroundColor:"white"}} className="borderRounded mt-4 p-3 " >
                                <Row>
                                    <Col md={12} xs={12}>
                                        <Row>
                                            <h5 className="fontBold fontDark">Pilih Metode Pembayaran</h5>
                                            <Col xs={2} md={1}>
                                                <hr className="brStyle"></hr>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="py-2" md={12}>
                                        {Object.keys(this.props.state.pembayaran).map((item, idx) => {
                                            var data = this.props.state.pembayaran
                                            return <BasicToggleButton
                                                        key={idx}
                                                        id={`radioPayment-${idx}`}
                                                        type="radio"
                                                        variant="outline-primary"
                                                        name="radioPayment"
                                                        className="d-flex mt-2"
                                                        value={data[item].nama}
                                                        disabled={this.props.state.selectedPrice === ''}
                                                        checked={this.props.state.selectedPayment === data[item].nama}
                                                        onChange={(e) => this.props.method.onPaymentChange(data[item].nama,item)}
                                                    >
                                                        <div>
                                                            <Row>
                                                                <Col className="d-flex align-items-center" xs={4} md={3}>
                                                                    <Image src={data[item].foto} thumbnail fluid/>
                                                                </Col>
                                                                <Col xs={3} md={5} className=" d-flex fontMedium justify-content-start align-items-center p-0 ">
                                                                    {data[item].nama}
                                                                </Col>
                                                                <Col className="d-flex align-items-center justify-content-end">
                                                                    {(this.props.state.selectedPrice === '') ? '' : <Badge className="py-2" pill bg="primary">
                                                                       Rp {'. '+this.props.state.selectedPrice}
                                                                    </Badge>}
                                                                    
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </BasicToggleButton>
                                        })}
                                    </Col>
                                </Row>
                            </div>
                            <div style={{backgroundColor:"white"}} className="borderRounded mt-4 p-3 " >
                                <Row>
                                    <Col md={12} xs={12}>
                                        <Row>
                                            <h5 className="fontBold fontDark">Masukkan Nomor Whatsapp</h5>
                                            <Col xs={2} md={1}>
                                                <hr className="brStyle"></hr>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="py-2" md={12}>
                                        <Form>
                                            <FormInput
                                                classNameGroup= "mb-3"
                                                controlId="formNoWa"
                                                label="Nomor Whatsapp"
                                                classNameControl= "without_number"
                                                type="number"
                                                onChange={(e) => this.props.method.handleInputChange(e)}
                                                placeholder="contoh : 081234567890"
                                                name="noWa"
                                            />
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-4 ">
                                <BasicButton
                                    className='px-4 py-2'
                                    size='lg'
                                    onClick={(e) => this.props.method.handleCheckout(e)}
                                >
                                    BELI SEKARANG
                                </BasicButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <BasicModal
                    show={this.props.state.showModal}
                    onHide={() => this.props.method.closeModal()}
                    title="Detail Pesanan"
                    submit={() => this.props.method.createPesanan()}
                    backdrop="static"
                    footer={true}
                >
                    <Row>
                        <Col className="mb-2" md={12}>
                            Mohon periksa kembali data anda dengan benar.
                        </Col>
                        <Col  md={6} xs={6}>
                            Nickname : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{this.props.state.dataOrder.nick}</div>
                        </Col>
                        <Col  md={6} xs={6}>
                            ID : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{this.props.state.dataOrder.idUser + ' (' + this.props.state.dataOrder.idZone + ')'}</div>
                        </Col>
                        <Col  md={6} xs={6}>
                            Nominal : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{this.props.state.dataOrder.nominal+' dm'}</div>
                        </Col>
                        <Col  md={6} xs={6}>
                            Harga : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{'RP. '+this.props.state.dataOrder.price}</div>
                        </Col>
                        <Col  md={6} xs={6}>
                            Pembayaran : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{this.props.state.dataOrder.payment}</div>
                        </Col>
                        <Col  md={6} xs={6}>
                            Nomor Whatsapp : 
                        </Col>
                        <Col md={6} xs={6}>
                            <div className="fontMedium">{this.props.state.dataOrder.noWa}</div>
                        </Col>
                    </Row>
                </BasicModal>
            </div>
        )
    }
}
