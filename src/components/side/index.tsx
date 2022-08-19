import { Container,Box, Cardfront, Cardback, Content } from "./style"
import logocard from '../../images/card-logo.svg'
import { useForm } from "../../contexts/formContenxt"

export const Side = () => {
  const {state} = useForm()
  return (
    <Container>
      <Box>
        <Cardfront>
          <img src={logocard} alt="Logo card fron" />
          <Content>
            <p>{state.cardNumber}</p>
            <div className="item">
              <p>{state.name}</p>
              <p className="date">{state.cardMonth}/{state.cardYear}</p>
            </div>
          </Content>
        </Cardfront>

        <Cardback>
          <p>{state.cvcCode}</p>
        </Cardback>
      </Box>
    </Container>
  )
}
