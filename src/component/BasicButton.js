import React from 'react'
import {Button} from 'react-bootstrap'
import {String} from '../system/Collection'

export default function BasicButton(props) {
    return (
        <>
           <Button 
                className={(props.className === undefined) ? '' : props.className} 
                variant={(props.variant === undefined) ? 'primary' : props.variant}
                size={(props.size === undefined) ? '' : props.size}
                style={{borderRadius : String.BORDER_RADIUS,fontWeight: 500}}
                onClick={(e) => props.onClick === undefined ? console.log(e) : props.onClick(e)}
           >
               {props.children}
            </Button>
        </>
    )
}
