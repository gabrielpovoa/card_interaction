import React, { ChangeEvent, useState } from "react";
import { Formactions, useForm } from "../../contexts/formContenxt";
import { Container, Form, Boxcontainer, Box, Date, Security } from "./style";

export const Right = () => {
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
              <label>exp. date (mm/yy)</label>
              <input type="text" value={state.cardMonth} onChange={handleMonth} placeholder="MM" />
              <input type="text" value={state.cardYear} onChange={handleYear} placeholder="YY" />
            </Date>

            <Security>
              <label >CVC</label>
              <input type="number" value={state.cvcCode} onChange={handleSecurity} placeholder="123" />
            </Security>
          </Box>
            <input type="button" value="confirm" className="btn"  />
        </Boxcontainer>
      </Form>
    </Container>
  )
}
