import React from 'react'
import {Form} from 'react-bootstrap'
import {String} from '../system/Collection'

export default function FormInput(props) {

    return (
        <Form.Group className={(props.classNameGroup === undefined) ? '' : props.classNameGroup } 
            controlId={(props.controlId === undefined) ? '' : props.controlId } 
        >
            {(props.label === undefined) ? '' : <Form.Label 
                                                    className={(props.classNameLabel === undefined)? '' : props.classNameLabel}
                                                    >{props.label}
                                                </Form.Label>}
            
            <Form.Control style={{borderRadius: String.BORDER_RADIUS}} 
                type={(props.type === undefined)? 'text' : props.type } 
                placeholder={(props.placeholder === undefined)? ' ' : props.placeholder} 
                className={(props.classNameControl === undefined)? '' : props.classNameControl} 
                onChange={(e) => props.onChange === undefined ? console.log(e) : props.onChange(e)}
                onBlur={(e) => props.onBlur === undefined ? console.log(e) : props.onBlur(e)}
                name={(props.name === undefined)? '' : props.name}
                disabled={(props.disabled === undefined)? false : props.disabled}
                onWheel={(e) => e.target.blur()}
                //style={{WebkitAppearance : ''}}
            />
        </Form.Group>
    )
}
