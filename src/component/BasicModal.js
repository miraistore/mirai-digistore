import React from 'react'
import { Modal } from 'react-bootstrap'
import {String} from '../system/Collection'
import BasicButton from './BasicButton'

export default function BasicModal(props) {

    return (
        <>
            <Modal 
                show={props.show} 
                onHide={(e) => props.onHide === undefined ? console.log(e) : props.onHide(e)} 
                centered
                backdrop={(props.backdrop === undefined) ? true : props.backdrop}
                dialogClassName="borderRounded"
            >
                <Modal.Header style={{backgroundColor : String.PRIMARY_COLOR}}>
                    <Modal.Title className="fontMedium" style={{color : 'white'}}>{(props.title === undefined) ? 'Modal Title' : props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                {(props.footer === false || props.footer === undefined)  ?
                    '' :
                    <Modal.Footer>
                        <BasicButton variant="secondary" onClick={(e) => props.onHide === undefined ? console.log(e) : props.onHide(e)}>
                            {(props.secondaryButton === undefined) ? 'BATAL' : props.secondaryButton}
                        </BasicButton>
                        <BasicButton variant="primary" onClick={(e) => props.submit === undefined ? console.log(e) : props.submit(e)}>
                            {(props.primaryButton === undefined) ? 'KONFIRMASI' : props.primaryButton}
                        </BasicButton>
                    </Modal.Footer>
                }
            </Modal>
        </>
    )
}
