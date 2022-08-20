import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formactions, useForm } from "../../contexts/formContenxt";
import { Modal } from "../modal";
import { Container, Form, Boxcontainer, Box, Date, Security } from "./style";

export const Right = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  const [card, setCardnumber] = useState(0)
  const [cardName, setCardName] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCVC] = useState(0);

  const { state, dispatch } = useForm();

  const handleCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Formactions.setName,
      payload: e.target.value
    })
  }

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Formactions.setCardNumber,
      payload: e.target.value
    })
  }

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Formactions.setMonth,
      payload: e.target.value
    })
  }

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Formactions.setYear,
      payload: e.target.value
    })
  }

  const handleSecurity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Formactions.setSecurityCode,
      payload: e.target.value
    })
  }

  const goModel = () => {
    if(state.name !== '' && state.cardNumber !== 0 && state.cardMonth !== '' && state .cardYear !== '' && state.cvcCode !== 0) {
      navigate('/model')
    } else {
      alert('You need to fill tou the fields')
    }
  }

  return (
    <Container>
      <Form method="GET">
        <Boxcontainer>
          <label>card holder name</label>
          <input type="text" onChange={handleCard} value={state.name} placeholder="Jane Appleseed" />
          <label>card number</label>
          <input type="number" value={state.cardNumber} placeholder="e.g. 1234 5678 9123 0000" onChange={handleCardNumber} />
          <Box>
            <Date>
              <div className="inputs">
                <label>exp. date (mm/yy)</label>
                <input type="text" value={state.cardMonth} onChange={handleMonth} className="month" placeholder="MM" />
                <input type="text" value={state.cardYear} onChange={handleYear} placeholder="YY" className="year" />
              </div>
            </Date>

            <Security>
              <label >CVC</label>
              <input type="number" value={state.cvcCode} onChange={handleSecurity} placeholder="123" />
            </Security>
          </Box>
          {
            state.cardNumber == 0 && state.cardMonth == '' && state.cardYear == '' && state.cvcCode == 0 && state.name == '' &&
            <input type="button" value="confirm" className="btn" style={{cursor: 'not-allowed'}}/>
          }
          {
            state.cardNumber !== 0 && state.cardMonth !== '' && state.cardYear !== '' && state.cvcCode !== 0 && state.name !== '' &&
            <>
            <input type="button" value="confirm" className="btn" onClick={goModel}/>
            </>
          }
        </Boxcontainer>
      </Form>
    </Container>
  )
}
