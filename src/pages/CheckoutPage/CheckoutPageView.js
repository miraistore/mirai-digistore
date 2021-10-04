import React, { Component } from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import {FaRegCopy} from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import BasicButton from '../../component/BasicButton'
import BasicModal from '../../component/BasicModal'
import FileUploader from 'react-firebase-file-uploader'
import firebaseHelper from '../../helper/FirebaseHelper'
import Loading from '../../component/Loading'

export default class CheckoutPageView extends Component {
    render() {
        return (
            <div>
                <Loading active={this.props.state.loadingContent}>
                    <Container className="mt-4">
                        <Row>
                            <Col md={4}>
                                <Row>
                                    <Col md={12} xs={12}>
                                        <img src={this.props.state.produk.foto} className="img-fluid borderRounded"  alt="Foto Produk"/>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Row>
                                            <h4 className="mt-4 fontBold fontDark">{this.props.state.produk.nama}</h4>
                                            <Col xs={2} md={3}>
                                                <hr className="brStyle"></hr>
                                            </Col>
                                        </Row>
                                        <p style={{color: '#444444'}} className="mt-2 fontMedium">{this.props.state.produk.deskripsi}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={8}>
                                <div style={{backgroundColor:"white"}} className="borderRounded p-3 ">
                                    <Row>
                                        <Col md={12}>
                                            <h4 className="fontBold fontDark">{this.props.state.message.title}</h4>
                                        </Col>
                                        <Col className="mt-2" md={12}>
                                            <p className="fontMediumLight">{this.props.state.message.detail}</p>
                                            <hr style={{color: "#F5F5F5", border: "1px solid"}}/>
                                        </Col>
                                        <Col className="mt-3" md={12}>
                                            <h5 className="mb-1 fontBold fontDark">Data Pesanan</h5>
                                            <p className="m-0 fontBold fontLight">{this.props.state.produk.nama}</p>
                                            <Row className="mt-3">
                                                <Col className="fontMedium fontDark" xs={6} md={4}>
                                                    Nomor Whatsapp :
                                                </Col>
                                                <Col className="fontBold fontDark" xs={6} md={8}>
                                                    {this.props.state.data.noWa}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="fontMedium fontDark"  xs={6}  md={4}>
                                                    ID Game :
                                                </Col>
                                                <Col className="fontBold fontDark" xs={6}  md={8}>
                                                    {this.props.state.data.idUser+' ('+this.props.state.data.idZone+')'}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="fontMedium fontDark"  xs={6}  md={4}>
                                                    Nickname :
                                                </Col>
                                                <Col className="fontBold fontDark"  xs={6}  md={8}>
                                                    {this.props.state.data.nick}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="fontMedium fontDark" xs={6}  md={4}>
                                                    Jumlah Diamond :
                                                </Col>
                                                <Col className="fontBold fontDark" xs={6}  md={8}>
                                                    {this.props.state.data.nominal +' Diamond'}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="fontMedium fontDark" xs={6}  md={4}>
                                                    Metode Pembayaran :
                                                </Col>
                                                <Col className="fontBold fontDark" xs={6}  md={8}>
                                                    {this.props.state.data.payment}
                                                </Col>
                                            </Row>
                                            <hr className="mt-3" style={{color: "#F5F5F5", border: "1px solid"}}/>
                                        </Col>
                                        <Col className="mt-3" md={12}>
                                            <Row>
                                                <Col md={6}>
                                                    <Row>
                                                        <Col md={12}>
                                                            <h5 className="mb-3 fontBold fontDark">Metode Pembayaran</h5>
                                                        </Col>
                                                        <Col xs={5} md={5}>
                                                            <Image src={this.props.state.pembayaran.foto} className="img-fluid" thumbnail alt="pembayaran"/>
                                                        </Col>
                                                        <Col className="fontMedium fontLight mt-2"  md={12}>
                                                            {this.props.state.pembayaran.atasNama}
                                                        </Col>
                                                        <Col md={12}>
                                                            <h4 className="fontBold fontDark">{this.props.state.pembayaran.nomer}<a className="mx-2 fontDark" onClick={() => this.props.method.handleCopy()} role='button'><FaRegCopy/></a></h4>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className="mt-sm-2 mt-md-0" md={6}>
                                                    <Row>
                                                        <Col className="fontMedium fontDark" xs={6}  md={6}>
                                                            Harga :
                                                        </Col>
                                                        <Col className="fontBold fontDark d-flex justify-content-end" xs={6}  md={6}>
                                                            {'Rp '+this.props.state.data.price}
                                                        </Col>
                                                        <Col className="fontMedium fontDark my-2" xs={6}  md={6}>
                                                            Biaya Transaksi : 
                                                        </Col>
                                                        <Col className="fontBold fontDark d-flex justify-content-end my-2" xs={6}  md={6}>
                                                            Gratis
                                                        </Col>
                                                        <Col className="fontMedium fontDark" xs={6}  md={6}>
                                                            Diskon :
                                                        </Col>
                                                        <Col className="fontBold fontDark d-flex justify-content-end" xs={6}  md={6}>
                                                            Rp 0
                                                        </Col>
                                                        <Col xs={12}  md={12}>
                                                            <hr className="mt-3" style={{color: "#F5F5F5", border: "1px solid"}}/>
                                                        </Col>
                                                        <Col className="fontMedium fontDark mt-3" xs={6}  md={6}>
                                                            Total :
                                                        </Col>
                                                        <Col className="fontBold fontPrimary d-flex justify-content-end mt-3" xs={6}  md={6}>
                                                            <h4 className="fontBold">{'Rp '+this.props.state.data.price}</h4>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mt-4 ">
                                    {(this.props.state.status === "0") ?  
                                        <BasicButton
                                            className='px-4 py-2'
                                            size='lg'
                                            onClick={(e) => this.props.method.handleUpload()}
                                        >
                                            UNGGAH BUKTI PEMBAYARAN
                                        </BasicButton>
                                        : ''
                                    }
                                </div>
                            </Col>
                        </Row>
                        <ToastContainer autoClose={3000}/>
                        <BasicModal
                            show={this.props.state.showModal}
                            onHide={() => this.props.method.closeModal()}
                            title="Upload bukti pembayaran"
                            submit={() => this.props.method.updatePesanan()}
                            primaryButton = "OKE"
                            backdrop = "static"
                            footer={this.props.state.modalFooter}
                        >
                            <Loading active={this.props.loadingModal}>
                                {this.props.state.files && (
                                    <Col md={5} xs={5} className="p-2">
                                        <Image src={this.props.state.files} className="img-fluid" thumbnail  alt="Bukti pembayaran" />
                                    </Col>
                                )}
                                <FileUploader
                                    accept="image/*"
                                    name="avatar"
                                    randomizeFilename
                                    storageRef={firebaseHelper.storage().ref("/resi")}
                                    onUploadError={this.props.method.handleUploadError}
                                    onUploadStart={this.props.method.handleProgress}
                                    onUploadSuccess={this.props.method.handleUploadSuccess}
                                />      
                            </Loading> 
                        </BasicModal>
                    </Container>
                </Loading>
            </div>
        )
    }
}
