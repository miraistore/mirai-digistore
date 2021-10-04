import React from 'react'
import {Carousel,Row,Col} from 'react-bootstrap'
import {String} from '../system/Collection'

export default function BasicCarousel() {
    return (
        <section>
            <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src= {String.DUMMY_IMAGE}
                            alt="First slide"
                           
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={String.DUMMY_IMAGE}
                            alt="Second slide"
                           
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={String.DUMMY_IMAGE}
                            alt="Third slide"
                           
                        />
                    </Carousel.Item>
            </Carousel>
        </section>
    )
}
