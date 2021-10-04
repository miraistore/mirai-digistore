import React from 'react'
import { ToggleButton } from 'react-bootstrap'
import {String} from '../system/Collection'

export default function BasicToggleButton(props) {
    

    return (
        <>
            <ToggleButton
                key={(props.key === undefined)? 0 : props.key}
                id={(props.id === undefined)? 'idnull' : props.id}
                type="radio"
                variant={(props.variant === undefined) ? 'outline-primary' : props.variant}
                name={(props.name === undefined)? 'namenull' : props.name}
                className={(props.className === undefined)? 'd-flex' : props.className}
                style={{borderRadius : String.BORDER_RADIUS}}
                value={(props.value === undefined)? null : props.value}
                checked={(props.checked === undefined)? null : props.checked}
                disabled={(props.disabled === undefined) ? false : props.disabled}
                onChange={(e) => props.onChange === undefined ? '' : props.onChange(e)}
            >
                {props.children}
            </ToggleButton>
        </>
    )
}
