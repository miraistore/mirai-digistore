import React from 'react'
import { Toast,ToastContainer } from 'react-bootstrap'

export default function BasicToast(props) {
    return (
        <ToastContainer position="bottom-center">
            <Toast
                show={props.show} 
                onHide={(e) => props.onHide === undefined ? false : props.onHide(e)} 
            >
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
