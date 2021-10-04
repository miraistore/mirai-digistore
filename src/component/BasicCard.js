import React from 'react'
import {Card,Button,Col,Row} from 'react-bootstrap'
import { String} from '../system/Collection'
import BasicButton from './BasicButton'
import {FaCartPlus} from 'react-icons/fa'


export default function BasicCard(props) {
    return (
        <div  >
            <Card style={{borderRadius : "10px",border: "0px"}}>
                <Card.Img style={{borderRadius : "10px 10px 0 0"}} variant="top" src={(props.img === undefined) ? String.DUMMY_IMAGE2 : props.img} />
                <Card.Body>
                    <Card.Title ><h6 className="fontBold">{(props.tittle === undefined) ? "Judul" : props.tittle}</h6></Card.Title>
                    <Card.Text className="pb-5 fontMediumLight">
                        <span >
                            {(props.text === undefined) ? <div>&nbsp;</div> : props.text}
                        </span>
                    </Card.Text>
                    <Row>
                        {/* <Col>
                            <Button>Tag&nbsp;Diskon</Button>
                        </Col> */}
                        <Col className="d-flex justify-content-end">
                            <BasicButton onClick={() => props.onClick()} style={{fontWeight: 500}} className="px-3 py-2"  variant="primary"><FaCartPlus className='mb-1'/>{' '}BELI</BasicButton>
                        </Col>
                    </Row>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
