import { useState } from 'react'
import { useForm } from '../../contexts/formContenxt'
import { Container, Content } from './style';
import { Link } from 'react-router-dom';

import completed from '../../images/icon-complete.svg'

interface modalProps {
    Open: boolean
}

export const Modal = ({ Open }: modalProps) => {



    return (
        <Container>
            <Content>
                <img src={completed} alt="" />

                <h2>We've added your card details</h2>
                <Link to="/">
                    <button>Continue</button>
                </Link>
            </Content>
        </Container>
    )
}