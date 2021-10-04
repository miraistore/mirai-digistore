import React from 'react'
import {String} from '../system/Collection'

export default function Logo(props) {
    return (
        <>
          <img 
            alt={(props.alt === undefined)? "" : props.alt}
            src={(props.src === undefined)? String.LOGO_LIGHT : props.src}
            width={(props.width === undefined)? "30" : props.width}
            height={(props.height === undefined)? "30" : props.height}
            className={(props.class === undefined)? "d-inline-block align-centre" : props.class}
          />  
        </>
    )
}
