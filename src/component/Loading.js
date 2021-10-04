import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { CircleLoader } from 'react-spinners'
import { String } from '../system/Collection'

export default function Loading(props) {
    return (
        <>
            <LoadingOverlay
                active={(props.active === undefined) ? false : props.active}
                spinner={
                    <CircleLoader
                        color={String.PRIMARY_COLOR}
                    />
                }
            >
                {props.children}
            </LoadingOverlay>
        </>
    )
}
